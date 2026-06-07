"use client"

import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/lib/i18n/language-provider"

export function Contact() {
  const { messages: m } = useLanguage()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
        setTimeout(() => setShowSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Erro ao enviar:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1, when: "beforeChildren" },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center" variants={itemVariants}>
            {m.contact.title} <span className="text-gradient">{m.contact.titleHighlight}</span>
          </motion.h2>

          <motion.p
            className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground text-center mb-8 sm:mb-12 px-4"
            variants={itemVariants}
          >
            {m.contact.subtitle}
          </motion.p>

          <motion.div
            className="bg-card/80 backdrop-blur-sm border border-border p-6 sm:p-10 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-4 sm:p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg"
              >
                <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-base sm:text-lg">{m.contact.successTitle}</p>
                    <p className="text-xs sm:text-sm text-green-600/80 dark:text-green-400/80">{m.contact.successMessage}</p>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="grid lg:grid-cols-2 gap-10 sm:gap-16">
              <motion.div className="space-y-8" variants={itemVariants}>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-6 text-center lg:text-left">{m.contact.infoTitle}</h3>
                  <div className="space-y-6">
                    <motion.div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-4 group" variants={itemVariants}>
                      <a
                        href="mailto:caiodiasol@proton.me"
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20"
                        title={m.contact.emailTitle}
                      >
                        <Mail className="h-5 w-5 text-primary" />
                      </a>
                      <div className="min-w-0">
                        <p className="font-medium text-sm sm:text-base mb-0.5">{m.contact.email}</p>
                        <a
                          href="mailto:caiodiasol@proton.me"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          caiodiasol@proton.me
                        </a>
                      </div>
                    </motion.div>

                    <motion.div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-4 group" variants={itemVariants}>
                      <a
                        href="https://wa.me/5573991053176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20"
                        title={m.contact.whatsappTitle}
                      >
                        <Phone className="h-6 w-6 text-primary" />
                      </a>
                      <div>
                        <p className="font-medium text-sm sm:text-base mb-0.5">{m.contact.whatsapp}</p>
                        <a
                          href="https://wa.me/5573991053176"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          +55 (73) 99105-3176
                        </a>
                      </div>
                    </motion.div>

                    <motion.div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-4 group" variants={itemVariants}>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-sm sm:text-base mb-0.5">{m.contact.location}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{m.contact.locationValue}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <form
                  action="https://formsubmit.co/caiodiasol@proton.me"
                  method="POST"
                  className="space-y-4"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="_subject" value={m.contact.formSubject} />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: "none" }} />

                  <motion.div variants={itemVariants}>
                    <Input
                      type="text"
                      name="name"
                      placeholder={m.contact.namePlaceholder}
                      required
                      minLength={2}
                      disabled={isSubmitting}
                      className="bg-muted/30 border-border focus:border-primary h-12"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Input
                      type="email"
                      name="email"
                      placeholder={m.contact.emailPlaceholder}
                      required
                      disabled={isSubmitting}
                      className="bg-muted/30 border-border focus:border-primary h-12"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder={m.contact.phonePlaceholder}
                      disabled={isSubmitting}
                      className="bg-muted/30 border-border focus:border-primary h-12"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Textarea
                      name="message"
                      placeholder={m.contact.messagePlaceholder}
                      required
                      minLength={10}
                      rows={4}
                      disabled={isSubmitting}
                      className="bg-muted/30 border-border focus:border-primary resize-none"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <Button
                      type="submit"
                      className="w-full bg-primary text-primary-foreground hover:bg-accent h-12 font-semibold"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-5 w-5 shrink-0 animate-spin" />
                          {m.contact.sending}
                        </>
                      ) : (
                        m.contact.submit
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
