import { Contact } from "@/components/contact"
import { Testimonials } from "@/components/testimonials"
import { BackButton } from "@/components/back-button"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 pt-6">
        <BackButton />
      </div>
      <Testimonials />
      <Contact />
    </main>
  )
}
