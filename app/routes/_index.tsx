import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Smart Dark Mode`,
      description: `Reduce eye strain by up to 47% with our intelligent dark mode that adapts to your environment`,
      icon: <i className="las la-moon"></i>,
    },
    {
      heading: `Familiar Interface`,
      description: `Feel right at home with our Yahoo-inspired interface that requires zero learning curve`,
      icon: <i className="las la-desktop"></i>,
    },
    {
      heading: `Enhanced Security`,
      description: `Rest easy knowing your emails are protected with enterprise-grade encryption`,
      icon: <i className="las la-shield-alt"></i>,
    },
    {
      heading: `Productivity Tools`,
      description: `Smart filters and organization features help you spend less time managing emails`,
      icon: <i className="las la-tasks"></i>,
    },
    {
      heading: `Cross-Platform Sync`,
      description: `Access your emails seamlessly across all your devices with real-time synchronization`,
      icon: <i className="las la-sync"></i>,
    },
    {
      heading: `24/7 Support`,
      description: `Get help whenever you need it with our round-the-clock customer support team`,
      icon: <i className="las la-headset"></i>,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Chen`,
      designation: `Digital Marketing Manager`,
      content: `The dark mode feature has been a game-changer for my late-night email sessions. My eyes thank me every day!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `James Wilson`,
      designation: `Freelance Writer`,
      content: `Switching from Yahoo was seamless. Same familiar feel but with modern features I didn't know I needed.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Maria Rodriguez`,
      designation: `Small Business Owner`,
      content: `Finally, an email service that doesn't require a PhD to use! Simple, efficient, and perfect for my needs.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for personal use`,
      monthly: 9,
      yearly: 89,
      features: [`5GB Storage`, `Dark Mode`, `Basic Support`],
    },
    {
      title: `Professional`,
      description: `Ideal for professionals`,
      monthly: 19,
      yearly: 190,
      features: [`25GB Storage`, `Priority Support`, `Advanced Features`],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `For growing teams`,
      monthly: 49,
      yearly: 490,
      features: [`Unlimited Storage`, `24/7 Support`, `Custom Features`],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the dark mode feature work?`,
      answer: `Our dark mode automatically adjusts to your environment and can be toggled manually. It reduces blue light emission by up to 47% compared to standard displays.`,
    },
    {
      question: `Can I import my existing emails?`,
      answer: `Yes! We provide a seamless import tool that works with all major email providers including Yahoo, Gmail, and Outlook.`,
    },
    {
      question: `Is my data secure?`,
      answer: `Absolutely. We use enterprise-grade encryption and follow strict security protocols to protect your emails and personal information.`,
    },
    {
      question: `What happens if I need help?`,
      answer: `Our support team is available 24/7 through chat and email. Professional and Enterprise plans include priority support.`,
    },
  ]

  const steps = [
    {
      heading: `Sign Up`,
      description: `Create your account in less than 2 minutes`,
    },
    {
      heading: `Import Emails`,
      description: `Transfer your existing emails with one click`,
    },
    {
      heading: `Customize Settings`,
      description: `Set up dark mode and your preferences`,
    },
    {
      heading: `Start Using`,
      description: `Enjoy a more comfortable email experience`,
    },
  ]

  const painPoints = [
    {
      emoji: `😫`,
      title: `Hours lost to email management`,
    },
    {
      emoji: `👀`,
      title: `Eye strain from bright screens`,
    },
    {
      emoji: `🤯`,
      title: `Overwhelmed by complex interfaces`,
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Email That's Easy on Your Eyes, Familiar to Your Mind`}
        subtitle={`Join thousands who've switched to the email service that combines classic simplicity with modern comfort`}
        buttonText={`Start Your Eye-Friendly Email Journey`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/fZoqEd-octopus-DbWT`}
        socialProof={
          <LandingSocialRating
            numberOfUsers={10000}
            suffixText={`happy users already enjoying comfortable emailing`}
          />
        }
      />
      <LandingSocialProof title={`Trusted By Industry Leaders`} />
      <LandingPainPoints
        title={`28% of Your Workday Lost to Email Management - We're Changing That`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to Comfortable Emailing Starts Here`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Modern Comfort Meets Familiar Design`}
        subtitle={`Everything you love about traditional email, enhanced with features that protect your eyes and boost productivity`}
        features={features}
      />
      <LandingTestimonials
        title={`Join Thousands Who've Found Their Email Happy Place`}
        subtitle={`See how our users are enjoying a more comfortable email experience`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Digital Wellbeing`}
        subtitle={`Choose the plan that matches your needs`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Common Questions About Better Emailing`}
        subtitle={`Everything you need to know about our service`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready for a More Comfortable Email Experience?`}
        subtitle={`Join thousands of users who've made the switch to eye-friendly emailing`}
        buttonText={`Start Your Free Trial`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
