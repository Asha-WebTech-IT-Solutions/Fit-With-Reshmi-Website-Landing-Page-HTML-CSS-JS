import { useEffect, useState } from "react";
import "@/App.css";

const LandingPage = () => {
  const [minutes, setMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://fitwithreshmi.websitesdevelop.com/images/Dipika.png",
    "https://fitwithreshmi.websitesdevelop.com/images/Meenakshi.JPG",
    "https://fitwithreshmi.websitesdevelop.com/images/Myraa%20Tarwani.JPG",
    "https://fitwithreshmi.websitesdevelop.com/images/Reshmi.JPG",
    "https://fitwithreshmi.websitesdevelop.com/images/Sonika.jpeg",
    "https://fitwithreshmi.websitesdevelop.com/images/Shruti_s%20transformation.jpeg"
  ];

  // Hero slider auto-play
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(slideInterval);
  }, [heroImages.length]);

  // Countdown Timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [minutes, seconds]);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "I have a busy schedule. Will this actually work?",
      answer: "Yes! This program is designed for busy women. The routines are simple, recipes are quick, and workouts need no gym. Most daily practices take just 15-30 minutes."
    },
    {
      question: "I've tried everything. What makes this different?",
      answer: "Most treatments only address symptoms. This program tackles the ROOT CAUSE with a complete 360° approach: nutrition, stress, hormones, movement, AND mindset - all personalized to YOUR body."
    },
    {
      question: "Will I have to give up all my favorite foods?",
      answer: "Not at all! We believe in balance. You can still enjoy your favorite foods in moderation. The key is knowing WHAT to eat and WHEN - and we'll guide you through it."
    },
    {
      question: "Is this only for severe PCOS cases?",
      answer: "No. Whether you're just diagnosed or have been struggling for years, whether you want to lose 5kg or 25kg - this system is personalized for YOUR specific situation and goals."
    },
    {
      question: "Do I need to take any medications or supplements?",
      answer: "No! Our approach is 100% natural. We focus on nutrition, lifestyle changes, and natural healing methods. No pills or powders required."
    },
    {
      question: "What if I fall off track?",
      answer: "That's exactly why you have Reshmi as your coach! She'll help you bounce back, guilt-free. Life happens, and the program is designed to be flexible and sustainable."
    }
  ];

  const transformations = [
    {
      image: "https://fitwithreshmi.websitesdevelop.com/images/Dipika.png",
      title: "Dipika - XXXL to XL in 3 months",
      description: "Balancing a demanding IT career, Dipika proved that weight loss is possible even with a sedentary desk job."
    },
    {
      image: "https://fitwithreshmi.websitesdevelop.com/images/Meenakshi.JPG",
      title: "Meenakshi - XL to M in 3 months",
      description: "This IT professional streamlined her diet to fit her busy schedule, proving 'Ghar ka Khana' works for techies."
    },
    {
      image: "https://fitwithreshmi.websitesdevelop.com/images/Myraa%20Tarwani.JPG",
      title: "Myraa - XXL to M in 6 months",
      description: "As a working mom, Myraa managed her household and career while prioritizing her health to achieve this incredible milestone."
    },
    {
      image: "https://fitwithreshmi.websitesdevelop.com/images/Reshmi.JPG",
      title: "Reshmi - Lost 40kg",
      description: "By addressing insulin resistance and thyroid issues, she regained her energy and freedom from joint pain."
    },
    {
      image: "https://fitwithreshmi.websitesdevelop.com/images/Shruti_s%20transformation.jpeg",
      title: "Shruti - L to M in 3 months",
      description: "Even with the stresses of being a PG student, Shruti stayed consistent with her meals to reach her fitness goals."
    },
    {
      image: "https://fitwithreshmi.websitesdevelop.com/images/Sonika.jpeg",
      title: "Sonika - XXL to L in 3 months",
      description: "After collaborating with top brands like MAC and Nykaa, Sonika decided to focus on her own brand…her health."
    }
  ];

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <a href="https://fitwithreshmi.com" className="logo">
            Fit With <span>Reshmi</span>
          </a>
        </div>
      </header>

      {/* Top Banner */}
      <div className="top-banner">
        <i className="fas fa-bolt"></i> Book Now – Get Your <span>Personalized PCOS Reversal Plan</span> + FREE Consultation! <i className="fas fa-bolt"></i>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1><span className="highlight">100+</span> Women Have Reversed PCOS With Reshmi</h1>
              <h2>Natural Healing. Real Results.</h2>
              
              <div className="mobile-hero-image">
                        <div className="hero-slider">
                          {heroImages.map((img, index) => (
                            <div 
                              key={index} 
                              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                            >
                              <img src={img} alt={`Transformation ${index + 1}`} />
                            </div>
                          ))}
                          <div className="slider-dots">
                            {heroImages.map((_, index) => (
                              <span 
                                key={index} 
                                className={`dot ${index === currentSlide ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(index)}
                              ></span>
                            ))}
                          </div>
                        </div>
                      </div>

              <ul className="hero-features">
                <li><i className="fas fa-check-circle"></i> Women's Health Practitioner & Certified Biohacker</li>
                <li><i className="fas fa-check-circle"></i> No extreme diets. No medications. Just natural healing.</li>
                <li><i className="fas fa-check-circle"></i> Personalized plans that fit YOUR lifestyle</li>
              </ul>

              <a href="#book-consultation" className="primary-btn shake-btn" data-testid="hero-cta-btn">
                Book Your Free Consultation
              </a>
              <p className="cta-subtext">Limited Spots Available - Book Now!</p>
            </div>
            <div className="hero-image">
              <div className="hero-slider">
                {heroImages.map((img, index) => (
                  <div 
                    key={index} 
                    className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                  >
                    <img src={img} alt={`Transformation ${index + 1}`} />
                  </div>
                ))}
                <div className="slider-dots">
                  {heroImages.map((_, index) => (
                    <span 
                      key={index} 
                      className={`dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-text">Women<br/>Healed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">36kg</div>
              <div className="stat-text">Personal Weight<br/>Loss Journey</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <div className="stat-text">Complete<br/>Healing Guides</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-text">Natural<br/>Methods</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section className="transformations-section">
        <div className="container">
          <div className="section-title">
            <h2>Real Women, Real Transformations</h2>
            <p>See What's Possible With the Right System</p>
          </div>
          <div className="transform-grid" data-testid="transform-slider">
            {transformations.map((item, index) => (
              <div className="transform-card" key={index}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="problem-section">
        <div className="container">
          <div className="problem-content">
            <div className="problem-text">
              <h2>You're Not Broken. Your Body Just Needs the Right System.</h2>
              <p>Most "solutions" only treat symptoms. You need a 360° approach that addresses the <span className="highlight-text">ROOT CAUSE</span>.</p>
              <p>Between confusing advice, quick fixes that don't work, and lost confidence from weight gain, acne, and hair fall — you're exhausted.</p>
              <p><strong>You're stuck in the loop:<br/>Start → Struggle → Quit → Repeat.</strong></p>
              <p>But the problem isn't you — it's the system you've been following.</p>
              
              <a href="#book-consultation" className="primary-btn shake-btn" data-testid="problem-cta-btn">
                Book Your Free Consultation
              </a>
              <p className="cta-subtext">Start Your Healing Journey Today</p>
            </div>
            <div className="problem-image">
              <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500" alt="PCOS Solution" />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="solution-section">
        <div className="container">
          <div className="solution-header">
            <h3>Let's Change That</h3>
            <h2>Heal PCOS the Natural Way - No Medications. No Gimmicks.</h2>
            <p className="solution-subtitle">Reshmi's 3-Step Formula: Heal Inside. Transform Outside. Feel Like YOU Again.</p>
          </div>
          <div className="solution-content">
            <div className="solution-image">
              <img src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500" alt="Natural Healing" />
            </div>
            <div className="solution-steps">
              <p className="solution-intro">My PCOS reversal method follows a simple 3-step approach that fits into your everyday life. No crash diets. No extreme workouts. Just balanced nutrition and expert support.</p>
              
              <div className="solution-step">
                <h4><span>1. Nutrition –</span> Heal from the inside out</h4>
                <p>PCOS-friendly meals that are delicious, not bland. Enjoy your favorite foods while healing your hormones.</p>
              </div>
              <div className="solution-step">
                <h4><span>2. Lifestyle + Mindset –</span> Reset your system</h4>
                <p>Stress management, sleep optimization, and mindset transformation for complete healing.</p>
              </div>
              <div className="solution-step">
                <h4><span>3. Movement –</span> Hormone-friendly workouts</h4>
                <p>Gentle exercises that support healing without triggering hormonal imbalance. No gym required!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>What Women Are Saying</h2>
            <p>Real Stories from Real Women</p>
          </div>
          <div className="testimonial-grid" data-testid="testimonial-slider">
            <div className="testimonial-card">
              <video 
                className="testimonial-video" 
                controls 
                poster="https://fitwithreshmi.websitesdevelop.com/images/Meenakshi.JPG"
              >
                <source src="https://fitwithreshmi.websitesdevelop.com/videos/Meenakshi.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <p className="testimonial-quote">"This program changed everything for me"</p>
            </div>
            <div className="testimonial-card">
              <video 
                className="testimonial-video" 
                controls 
                poster="https://fitwithreshmi.websitesdevelop.com/images/Reshmi.JPG"
              >
                <source src="https://fitwithreshmi.websitesdevelop.com/videos/Consultation.mp4" type="video/mp4" />
                Your browser does not support video.
              </video>
              <p className="testimonial-quote">"Finally, something that actually works"</p>
            </div>
          </div>
          
          <div className="section-cta">
            <a href="#book-consultation" className="primary-btn shake-btn" data-testid="testimonial-cta-btn">
              Book Your Free Consultation
            </a>
            <p className="cta-subtext">Join These Success Stories</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text">
              <h2>Why Choose Fit With Reshmi?</h2>
            </div>
            <div className="comparison-table">
              <div className="comparison-row comparison-header-row">
                <div className="comparison-cell comparison-feature">Feature</div>
                <div className="comparison-cell reshmi-highlight">Fit With Reshmi</div>
                <div className="comparison-cell">Other Programs</div>
                <div className="comparison-cell hide-mobile">DIY Approach</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell comparison-feature">Personalized Plans</div>
                <div className="comparison-cell reshmi-highlight"><i className="fas fa-check check-icon"></i> Based on your lifestyle</div>
                <div className="comparison-cell"><i className="fas fa-times cross-icon"></i> Generic charts</div>
                <div className="comparison-cell hide-mobile"><i className="fas fa-times cross-icon"></i> Blog-based</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell comparison-feature">Expert Support</div>
                <div className="comparison-cell reshmi-highlight"><i className="fas fa-check check-icon"></i> 1-on-1 with Reshmi</div>
                <div className="comparison-cell"><i className="fas fa-times cross-icon"></i> Single contact</div>
                <div className="comparison-cell hide-mobile"><i className="fas fa-times cross-icon"></i> None</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell comparison-feature">Natural Methods</div>
                <div className="comparison-cell reshmi-highlight"><i className="fas fa-check check-icon"></i> No medications</div>
                <div className="comparison-cell"><i className="fas fa-exclamation-triangle warning-icon"></i> Often pills</div>
                <div className="comparison-cell hide-mobile"><i className="fas fa-times cross-icon"></i> No guidance</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell comparison-feature">Proven Results</div>
                <div className="comparison-cell reshmi-highlight"><i className="fas fa-check check-icon"></i> 100+ women healed</div>
                <div className="comparison-cell"><i className="fas fa-exclamation-triangle warning-icon"></i> Limited proof</div>
                <div className="comparison-cell hide-mobile"><i className="fas fa-times cross-icon"></i> No credibility</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell comparison-feature">Holistic Approach</div>
                <div className="comparison-cell reshmi-highlight"><i className="fas fa-check check-icon"></i> Mind + Body + Nutrition</div>
                <div className="comparison-cell"><i className="fas fa-exclamation-triangle warning-icon"></i> Diet only</div>
                <div className="comparison-cell hide-mobile"><i className="fas fa-times cross-icon"></i> Scattered info</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="what-you-get-section">
        <div className="container">
          <div className="what-you-get-content">
            <div className="what-you-get-text">
              <h3>What You Get With</h3>
              <h2>Reshmi's PCOS Reversal Program</h2>
              <p className="subtitle">Complete 360° Healing System</p>
              
              <ul className="benefits-list">
                <li><i className="fas fa-check"></i> 1-on-1 Consultation with Reshmi</li>
                <li><i className="fas fa-check"></i> Personalized Diet Plan for YOUR body</li>
                <li><i className="fas fa-check"></i> PCOS-Safe Meal Plans & Delicious Recipes</li>
                <li><i className="fas fa-check"></i> Hormone-Balancing Workout Routines (No Gym)</li>
                <li><i className="fas fa-check"></i> Stress Management & Reset Protocols</li>
                <li><i className="fas fa-check"></i> Skin & Hair Restoration System</li>
                <li><i className="fas fa-check"></i> Mindset Transformation Toolkit</li>
                <li><i className="fas fa-check"></i> Lifetime Access to All Materials</li>
              </ul>
            </div>
            <div className="what-you-get-image">
              <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500" alt="PCOS Program" />
            </div>
          </div>
          
          <div className="section-cta">
            <a href="#book-consultation" className="primary-btn shake-btn" data-testid="benefits-cta-btn">
              Book Your Free Consultation
            </a>
            <p className="cta-subtext">Start Your Transformation Today</p>
          </div>
        </div>
      </section>

      {/* Meet Reshmi Section */}
      <section className="experts-section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Your Coach</h2>
            <p>Women's Health Practitioner & Certified Biohacker</p>
          </div>
          <div className="coach-container">
            <div className="expert-card">
              <img src="https://fitwithreshmi.websitesdevelop.com/images/Reshmi%20verma.jpeg" alt="Reshmi Verma" />
              <div className="expert-info">
                <h3>Reshmi Verma</h3>
                <p>Women's Health Practitioner<br/>Functional Nutritionist<br/>Certified Biohacker</p>
              </div>
            </div>
            <p className="coach-description">
              I know what it's like to feel trapped in your own body. I was <strong>36kg overweight with PCOS</strong>, exhausted, and frustrated. After years of research and self-experimentation, I reversed my PCOS naturally. Now I've helped <strong>100+ women</strong> do the same with this proven system.
            </p>
            <p className="coach-message">
              💕 Your body isn't broken. You just need the right system. Let me show you how.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-content">
            <div className="process-title">
              <h2>What Happens After You Join?</h2>
            </div>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-marker"></div>
                <h3>Step 1</h3>
                <h4>Personal Health Assessment</h4>
                <p>Your journey begins with an in-depth call to understand your unique situation. Your plan is truly personalized to YOU.</p>
              </div>
              <div className="process-step">
                <div className="step-marker"></div>
                <h3>Step 2</h3>
                <h4>Custom Healing Protocol</h4>
                <p>Get your personalized nutrition plan, workout routines, and lifestyle changes - all designed for YOUR body and schedule.</p>
              </div>
              <div className="process-step">
                <div className="step-marker"></div>
                <h3>Step 3</h3>
                <h4>Ongoing Support & Adjustments</h4>
                <p>Weekly check-ins, plan adjustments based on your progress, and 24/7 support whenever you need help.</p>
              </div>
              <div className="process-step">
                <div className="step-marker"></div>
                <h3>Step 4</h3>
                <h4>Visible Results & Transformation</h4>
                <p>Experience the change - regulated cycles, clear skin, natural weight loss, and feeling like YOURSELF again!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <div className="container">
          <div className="section-title">
            <h2>Women Love Their Results</h2>
            <p>100+ Success Stories and Counting</p>
          </div>
          <div className="reviews-slider">
            <div className="reviews-track">
              {[
                "https://fitwithreshmi.websitesdevelop.com/images/Dipika.png",
                "https://fitwithreshmi.websitesdevelop.com/images/Meenakshi.JPG",
                "https://fitwithreshmi.websitesdevelop.com/images/Myraa%20Tarwani.JPG",
                "https://fitwithreshmi.websitesdevelop.com/images/Reshmi.JPG",
                "https://fitwithreshmi.websitesdevelop.com/images/Sonika.jpeg",
                "https://fitwithreshmi.websitesdevelop.com/images/Shruti_s%20transformation.jpeg",
                "https://fitwithreshmi.websitesdevelop.com/images/Amita%20Pal.jpg",
                "https://fitwithreshmi.websitesdevelop.com/images/Tanya%20Chauhan.jpg",
                "https://fitwithreshmi.websitesdevelop.com/images/Dipika.png",
                "https://fitwithreshmi.websitesdevelop.com/images/Meenakshi.JPG"
              ].map((img, index) => (
                <div className="review-card" key={index}>
                  <img src={img} alt="Review" />
                </div>
              ))}
            </div>
          </div>
          
          <div className="section-cta">
            <a href="#book-consultation" className="primary-btn shake-btn" data-testid="reviews-cta-btn">
              Book Your Free Consultation
            </a>
            <p className="cta-subtext">Start Your Success Story Today</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <div 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`} 
                key={index}
                data-testid={`faq-item-${index + 1}`}
              >
                <div className="faq-question" onClick={() => toggleFaq(index)}>
                  <span>{faq.question}</span>
                  <i className="fas fa-chevron-down"></i>
                </div>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <a href="https://fitwithreshmi.com" className="logo">Fit With <span>Reshmi</span></a>
          <p className="copyright">© 2025 Fit With Reshmi. All rights reserved.</p>
          <p className="website">
            <a href="https://fitwithreshmi.com">fitwithreshmi.com</a>
          </p>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="sticky-cta" id="stickyCta">
        <div className="sticky-timer">
          Offer ends in <span>{String(minutes).padStart(2, '0')}</span>:<span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <a href="#book-consultation" className="primary-btn sticky-btn shake-btn" data-testid="sticky-cta-btn">
          Book Your Free Consultation
        </a>
      </div>

      {/* Consultation Anchor */}
      <div id="book-consultation"></div>
    </div>
  );
};

function App() {
  return <LandingPage />;
}

export default App;
