"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, CheckCircle, Loader2 } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setShowSuccess(true)
        form.reset()
        
        // Esconder mensagem após 5 segundos
        setTimeout(() => {
          setShowSuccess(false)
        }, 5000)
      }
    } catch (error) {
      console.error('Erro ao enviar:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-center">
            Vamos <span className="text-gradient">Conversar</span>
          </h2>

          <p className="text-sm leading-relaxed sm:text-base lg:text-lg text-muted-foreground text-center mb-8 sm:mb-12 px-4">
            Se você gostaria de discutir um projeto ou apenas dizer oi, estou sempre disposto a conversar.
          </p>

          {/* Mensagem de Sucesso */}
          {showSuccess && (
            <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center gap-3 text-green-600 dark:text-green-400">
                <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-base sm:text-lg">Mensagem enviada com sucesso! ✨</p>
                  <p className="text-xs sm:text-sm text-green-600/80 dark:text-green-400/80">
                    Obrigado pelo contato! Responderei em breve.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Informações de contato */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">Informações de Contato</h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <p className="font-medium text-sm sm:text-base">Email</p>
                      <a 
                        href="mailto:caiodiasol@proton.me"
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                      >
                        caiodiasol@proton.me
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Telefone</p>
                      <a 
                        href="tel:+5573991053176"
                        className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        +55 (73) 99105-3176
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:text-left gap-3 sm:gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">Localização</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Florianópolis - SC</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div>
              <form 
                action="https://formsubmit.co/caiodiasol@proton.me" 
                method="POST" 
                className="space-y-4 sm:space-y-6"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="_subject" value="Nova mensagem do portfólio!" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: 'none' }} />

                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                    minLength={2}
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    required
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Seu telefone (opcional)"
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Sua mensagem"
                    required
                    minLength={10}
                    rows={5}
                    disabled={isSubmitting}
                    className="bg-card border-border focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary text-primary-foreground hover:cursor-pointer hover:bg-accent"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}