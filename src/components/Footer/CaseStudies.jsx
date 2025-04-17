"use client"
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  FileText, 
  DollarSign, 
  BarChart2, 
  Clock, 
  Repeat, 
  Search, 
  Star 
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useNavigate } from 'react-router'

const fullCaseStudiesData = [
  {
    id: 1,
    title: "Streamlining Billing Processes",
    overview: "Company A struggled with slow billing and frequent manual errors, which hampered their operational efficiency.",
    challenge: "Manual invoicing was time-consuming and error-prone, leading to delayed payments.",
    solution: "Easibill automated the invoicing process, reducing human error and speeding up the billing cycle.",
    results: "Processing time was reduced by 50% and errors decreased by 40%.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Enhancing Cash Flow Management",
    overview: "Company B needed a robust solution to manage cash flow as late payments were affecting their operations.",
    challenge: "Delayed invoicing and follow-ups were causing cash flow bottlenecks.",
    solution: "Easibill's real-time tracking and automated payment reminders improved their payment collection.",
    results: "Cash flow improved by 35% and overdue invoices dropped significantly.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Reducing Administrative Overhead",
    overview: "Company C was overwhelmed by the administrative load from manual billing tasks.",
    challenge: "High administrative costs and resource drain due to manual processes.",
    solution: "The automation features in Easibill cut down manual data entry and paperwork.",
    results: "Saved over 20 hours per month, allowing staff to focus on strategic tasks.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Boosting Customer Satisfaction",
    overview: "Company D wanted to improve its customer service by providing clearer, more timely billing.",
    challenge: "Confusing invoices and late statements led to customer frustration.",
    solution: "Easibill enabled clear, prompt billing with customizable templates.",
    results: "Customer satisfaction scores improved by 25%.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Improving Financial Reporting",
    overview: "Company E required more accurate financial insights for better decision-making.",
    challenge: "Inconsistent data and manual errors complicated financial reporting.",
    solution: "Easibill's integrated analytics and reporting tools automated data collection.",
    results: "Reporting accuracy improved significantly, aiding strategic decisions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Simplifying Payment Collection",
    overview: "Company F experienced delays in payments that disrupted their cash flow.",
    challenge: "Inefficient tracking of due invoices led to prolonged payment cycles.",
    solution: "With automated reminders and payment tracking, Easibill ensured timely collections.",
    results: "Payment delays were reduced, streamlining the overall payment process.",
    image: "https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "Scaling Billing Operations",
    overview: "Company G was expanding rapidly and needed a scalable billing solution.",
    challenge: "Manual billing processes couldn't keep up with the pace of growth.",
    solution: "Easibill provided a scalable, automated platform that grew with the business.",
    results: "Enabled seamless growth with reduced administrative overhead.",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Optimizing Resource Allocation",
    overview: "Company H wanted to reallocate staff resources from repetitive billing tasks to core business activities.",
    challenge: "Billing operations consumed excessive staff time.",
    solution: "Easibill automated routine tasks, freeing up staff for more value-added work.",
    results: "Reallocated approximately 15% of staff time to strategic initiatives.",
    image: "https://images.unsplash.com/photo-1508002366005-75a695ee2d17?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Increasing Data Accuracy",
    overview: "Company I encountered financial discrepancies due to errors in manual invoicing.",
    challenge: "Frequent data inaccuracies resulted in financial misreporting.",
    solution: "Easibill's automated data entry reduced human errors dramatically.",
    results: "Achieved a significant improvement in data accuracy and financial reliability.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Driving Business Growth",
    overview: "Company J leveraged Easibill to not only streamline billing but also to focus on business expansion.",
    challenge: "Manual billing processes were a bottleneck to scaling operations.",
    solution: "By automating billing and gaining financial insights, Easibill supported their growth strategy.",
    results: "Reported a 30% increase in revenue and enhanced operational efficiency.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  }
]

const useCasesData = [
  {
    id: 1,
    title: "Invoice Creation & Management",
    details: "Generate professional invoices quickly using customizable templates. Manage drafts, sent, and paid invoices from one unified dashboard.",
    icon: <FileText className="h-6 w-6" />
  },
  {
    id: 2,
    title: "Automated Payment Reminders",
    details: "Set up automated email and SMS reminders to ensure timely payments, reducing the risk of overdue accounts.",
    icon: <Clock className="h-6 w-6" />
  },
  {
    id: 3,
    title: "Expense Tracking",
    details: "Easily track and categorize business expenses. Integrate expense data with your invoices for comprehensive financial records.",
    icon: <DollarSign className="h-6 w-6" />
  },
  {
    id: 4,
    title: "Financial Reporting & Analytics",
    details: "Access detailed financial reports and real-time analytics. Use these insights to make informed business decisions and forecast trends.",
    icon: <BarChart2 className="h-6 w-6" />
  },
  {
    id: 5,
    title: "Recurring Billing",
    details: "Ideal for subscription-based services, set up recurring billing cycles to automate regular invoicing without manual intervention.",
    icon: <Repeat className="h-6 w-6" />
  }
]

const testimonialsData = [
  {
    id: 1,
    name: "Shubham",
    role: "Shop owner",
    testimonial: "Easibill revolutionized our billing process. The automation saved us countless hours and drastically reduced errors."
  },
  {
    id: 2,
    name: "Maria",
    role: "Shop owner (Dubai)",
    testimonial: "The financial insights and reporting features of Easibill have empowered us to make more strategic decisions."
  },
  {
    id: 3,
    name: "Sam Lee",
    role: "Operations Manager (Dubai)",
    testimonial: "With Easibill, our cash flow issues have been resolved. The platform is intuitive and extremely efficient."
  }
]

const CaseStudies = () => {
    const navigate = useNavigate()
    const [expandedCaseStudy, setExpandedCaseStudy] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [activeFilter, setActiveFilter] = useState("all")
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      setTimeout(() => setIsLoading(false), 1000)
    }, [])
  
    useEffect(() => {
      document.title = "Easibill Case Studies | Success Stories in Billing Automation"
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute(
          "content",
          "Discover how businesses transformed their billing processes with Easibill. Read success stories and case studies about automated invoicing, payment collection, and financial management.",
        )
      }
    }, [])
  
    const filteredCaseStudies = fullCaseStudiesData.filter(
      (study) =>
        study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        study.overview.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  
    const industries = ["Retail", "Technology", "Healthcare", "Finance", "Manufacturing"]
  
    const CustomAccordionItem = ({ item, isExpanded, onToggle }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="border rounded-lg p-4 mb-4 hover:shadow-lg transition-shadow bg-white"
      >
        <div className="cursor-pointer flex justify-between items-center" onClick={() => onToggle(item.id)}>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="hidden md:inline-flex">
              Case Study #{item.id}
            </Badge>
            <h2 className="text-xl font-semibold text-black">{item.title}</h2>
          </div>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <ChevronDown className="h-5 w-5 text-black" />
          </motion.div>
        </div>
  
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-black">
                    <Star className="h-5 w-5 text-yellow-400" />
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">{item.overview}</CardDescription>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                  <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                    <h3 className="text-lg font-semibold mb-2 text-black">The Challenge</h3>
                    <p className="text-gray-600">{item.challenge}</p>
                  </motion.div>
                  <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
                    <h3 className="text-lg font-semibold mb-2 text-black">Our Solution</h3>
                    <p className="text-gray-600">{item.solution}</p>
                  </motion.div>
                </CardContent>
                <CardFooter>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="w-full"
                  >
                    <h3 className="text-lg font-semibold mb-2 text-black">Impact & Results</h3>
                    <p className="text-gray-600">{item.results}</p>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  
    return (
      <div className="min-h-screen bg-white text-black">
        <div className="container mx-auto px-4 py-12 space-y-16">
          <header className="text-center space-y-6 dark:bg-gray-800 ">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold text-black"
            >
              Customer Success Stories
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Discover how businesses across the globe have transformed their billing operations and achieved remarkable
              results with Easibill.
            </motion.p>
          </header>
  
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search case studies..."
                className="pl-10 py-6 bg-white text-black border-gray-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <Button
                variant={activeFilter === "all" ? "default" : "outline"}
                onClick={() => setActiveFilter("all")}
                className="whitespace-nowrap bg-white text-black border-gray-300"
              >
                All Industries
              </Button>
              {industries.map((industry) => (
                <Button
                  key={industry}
                  variant={activeFilter === industry ? "default" : "outline"}
                  onClick={() => setActiveFilter(industry)}
                  className="whitespace-nowrap bg-white text-black border-gray-300"
                >
                  {industry}
                </Button>
              ))}
            </div>
          </div>
  
          <section className="max-w-4xl mx-auto">
            {isLoading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 bg-gray-100 animate-pulse rounded-lg" />
                ))}
              </div>
            ) : (
              filteredCaseStudies.map((caseStudy) => (
                <CustomAccordionItem
                  key={caseStudy.id}
                  item={caseStudy}
                  isExpanded={expandedCaseStudy === caseStudy.id}
                  onToggle={setExpandedCaseStudy}
                />
              ))
            )}
          </section>
  
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-black">How Customers Use Easibill</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {useCasesData.map((useCase, index) => (
                <motion.div
                  key={useCase.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col hover:shadow-lg transition-shadow bg-white">
                    <CardHeader>
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4"
                      >
                        {useCase.icon}
                      </motion.div>
                      <CardTitle className="text-black">{useCase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{useCase.details}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
  
          <section className="space-y-8 bg-gray-50 -mx-4 px-4 py-16">
            <h2 className="text-3xl font-bold text-center text-black">What Our Customers Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonialsData.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow bg-white">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <CardTitle className="text-lg text-black">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-600">{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="italic text-gray-600">"{testimonial.testimonial}"</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>
  
          <section className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-black">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600">
              Join countless businesses that have revolutionized their billing processes with Easibill.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={() => navigate("/lead")}
                className="text-lg px-8 py-6 bg-blue-600 text-white hover:bg-blue-700"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </section>
        </div>
      </div>
    )
  }
  
  export default CaseStudies
  
  
