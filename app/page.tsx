'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  const portfolioImages = [
    {
      id: 1,
      category: 'beauty',
      description: 'Natural beauty & skincare',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      category: 'fashion',
      description: 'Street style & haute couture',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      category: 'lifestyle',
      description: 'Daily moments & travel',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      category: 'beauty',
      description: 'Makeup & cosmetics',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    },
    {
      id: 5,
      category: 'fashion',
      description: 'Editorial & runway',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    },
    {
      id: 6,
      category: 'lifestyle',
      description: 'Food & wellness',
      gradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    },
    {
      id: 7,
      category: 'beauty',
      description: 'Hair & styling',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    },
    {
      id: 8,
      category: 'fashion',
      description: 'Accessories & jewelry',
      gradient: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    },
  ]

  const stats = [
    { number: '250K+', label: 'Instagram Followers' },
    { number: '5M+', label: 'Total Reach' },
    { number: '8.5%', label: 'Engagement Rate' },
    { number: '100+', label: 'Brand Collaborations' }
  ]

  const services = [
    {
      title: 'Product Reviews',
      description: 'Authentic, engaging reviews that resonate with audiences',
      icon: '⭐'
    },
    {
      title: 'Brand Storytelling',
      description: 'Compelling narratives that connect products with lifestyles',
      icon: '📱'
    },
    {
      title: 'Lifestyle Content',
      description: 'Natural integration of brands into daily life moments',
      icon: '✨'
    },
    {
      title: 'Tutorial Videos',
      description: 'Step-by-step guides for beauty, fashion, and lifestyle',
      icon: '🎬'
    }
  ]

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>MIA CHEN</div>
          <div className={styles.navLinks}>
            <button
              onClick={() => setActiveSection('home')}
              className={activeSection === 'home' ? styles.active : ''}
            >
              Home
            </button>
            <button
              onClick={() => setActiveSection('portfolio')}
              className={activeSection === 'portfolio' ? styles.active : ''}
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveSection('services')}
              className={activeSection === 'services' ? styles.active : ''}
            >
              Services
            </button>
            <button
              onClick={() => setActiveSection('contact')}
              className={activeSection === 'contact' ? styles.active : ''}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroImage}>
              <div className={styles.modelPlaceholder}>
                <div className={styles.modelGradient}></div>
                <div className={styles.modelOverlay}>
                  <div className={styles.featuredBadge}>UGC CREATOR</div>
                </div>
              </div>
            </div>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Mia Chen
                <span className={styles.subtitle}>Korean-European Model & UGC Creator</span>
              </h1>
              <p className={styles.heroDescription}>
                Bridging cultures through authentic storytelling. Specializing in beauty, fashion,
                and lifestyle content that resonates with diverse audiences across Instagram and beyond.
              </p>
              <div className={styles.heroStats}>
                {stats.map((stat, index) => (
                  <div key={index} className={styles.statCard}>
                    <div className={styles.statNumber}>{stat.number}</div>
                    <div className={styles.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className={styles.heroButtons}>
                <button
                  className={styles.primaryButton}
                  onClick={() => setActiveSection('portfolio')}
                >
                  View Portfolio
                </button>
                <button
                  className={styles.secondaryButton}
                  onClick={() => setActiveSection('contact')}
                >
                  Let's Collaborate
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Portfolio Section */}
      {activeSection === 'portfolio' && (
        <section className={styles.portfolio}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Portfolio</h2>
            <p className={styles.sectionDescription}>
              A curated collection of brand collaborations and creative content
            </p>
          </div>
          <div className={styles.portfolioGrid}>
            {portfolioImages.map((item) => (
              <div key={item.id} className={styles.portfolioItem}>
                <div
                  className={styles.portfolioImage}
                  style={{ background: item.gradient }}
                >
                  <div className={styles.portfolioOverlay}>
                    <span className={styles.portfolioCategory}>{item.category}</span>
                    <p className={styles.portfolioDescription}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === 'services' && (
        <section className={styles.services}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Services</h2>
            <p className={styles.sectionDescription}>
              Comprehensive UGC solutions tailored to your brand's vision
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.expertise}>
            <h3 className={styles.expertiseTitle}>Areas of Expertise</h3>
            <div className={styles.expertiseTags}>
              {['Skincare', 'Makeup', 'Fashion', 'Lifestyle', 'Travel', 'Wellness',
                'Food & Beverage', 'Technology', 'Home Decor', 'Fitness'].map((tag, index) => (
                <span key={index} className={styles.expertiseTag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className={styles.brandLogos}>
            <h3 className={styles.brandsTitle}>Trusted by Leading Brands</h3>
            <div className={styles.logosGrid}>
              {['Premium Beauty', 'Luxury Fashion', 'Global Lifestyle', 'Tech Innovation',
                'Wellness Co.', 'Travel Elite'].map((brand, index) => (
                <div key={index} className={styles.brandCard}>{brand}</div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className={styles.contact}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Let's Work Together</h2>
            <p className={styles.sectionDescription}>
              Ready to create something extraordinary? Reach out for collaborations
            </p>
          </div>

          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📧</div>
                <h3>Email</h3>
                <p>collaborations@miachen.com</p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>📱</div>
                <h3>Instagram</h3>
                <p>@miachen.creates</p>
              </div>
              <div className={styles.contactCard}>
                <div className={styles.contactIcon}>💼</div>
                <h3>Management</h3>
                <p>talent@creativehub.agency</p>
              </div>
            </div>

            <div className={styles.contactForm}>
              <input
                type="text"
                placeholder="Your Name"
                className={styles.formInput}
              />
              <input
                type="email"
                placeholder="Your Email"
                className={styles.formInput}
              />
              <input
                type="text"
                placeholder="Brand/Company"
                className={styles.formInput}
              />
              <textarea
                placeholder="Tell me about your project..."
                className={styles.formTextarea}
                rows={6}
              />
              <button className={styles.submitButton}>Send Message</button>
            </div>
          </div>

          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialButton}>Instagram</a>
            <a href="#" className={styles.socialButton}>TikTok</a>
            <a href="#" className={styles.socialButton}>YouTube</a>
            <a href="#" className={styles.socialButton}>LinkedIn</a>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; 2024 Mia Chen. All rights reserved.</p>
        <p className={styles.footerSubtext}>Korean-European Model & UGC Creator</p>
      </footer>
    </div>
  )
}
