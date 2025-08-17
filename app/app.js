
const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'Neural Background Removal',
      description: 'Our quantum-neural networks understand context like never before, removing backgrounds with pixel-perfect precision.',
      delay: 0
    },
    {
      icon: Sparkles,
      title: 'Quantum Upscaling',
      description: 'Enhance resolution up to 16K using our proprietary quantum algorithms that recreate detail from thin air.',
      delay: 200
    },
    {
      icon: Eye,
      title: 'Contextual Style Transfer',
      description: 'Apply artistic styles that understand your image content, creating masterpieces that feel naturally composed.',
      delay: 400
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Experience instant results powered by our neural acceleration technology. No more waiting, just creating.',
      delay: 600
    },
    {
      icon: Layers,
      title: 'Infinite Layers',
      description: 'Work with unlimited smart layers that automatically organize and optimize for maximum creative freedom.',
      delay: 800
    },
    {
      icon: Star,
      title: 'AI-Powered Suggestions',
      description: 'Get intelligent recommendations based on your creative intent and current project context.',
      delay: 1000
    }
  ];

  const pricingPlans = [
    {
      plan: 'Starter',
      price: 9,
      features: [
        '1,000 AI enhancements/month',
        'Basic neural filters',
        'HD export quality',
        'Community support'
      ],
      buttonText: 'Start Creating'
    },
    {
      plan: 'Pro',
      price: 29,
      features: [
        '10,000 AI enhancements/month',
        'Advanced quantum tools',
        '4K export quality',
        'Priority support',
        'Custom neural training'
      ],
      featured: true,
      buttonText: 'Upgrade to Pro'
    },
    {
      plan: 'Enterprise',
      price: 99,
      features: [
        'Unlimited AI processing',
        'Custom neural models',
        '16K export quality',
        'Dedicated support',
        'API access',
        'Team collaboration'
      ],
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <div className="relative">
      {!isMobile && <CustomCursor />}
      <FloatingShapes />
      
      <HeroSection />

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="text-center">
              <AnimatedCounter target={2500000} suffix="+" />
              <p className="text-gray-600 font-semibold">Images Enhanced</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={150000} suffix="+" />
              <p className="text-gray-600 font-semibold">Active Creators</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={99} suffix="%" />
              <p className="text-gray-600 font-semibold">Satisfaction Rate</p>
            </div>
            <div className="text-center">
              <AnimatedCounter target={24} suffix="/7" />
              <p className="text-gray-600 font-semibold">AI Processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-black mb-6 bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
              Beyond Imagination
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of image editing with tools that think, learn, and create alongside you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <FeatureCard key={i} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
       <pricingPlan/>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-6xl font-black text-white mb-6">
            Ready to Transcend Reality?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join thousands of creators who are already shaping the future of visual storytelling with Neural Vision.
          </p>
          <button className="group px-12 py-6 bg-white text-blue-600 font-black text-xl rounded-2xl hover:scale-105 transform transition-all duration-300 hover:shadow-2xl">
            Launch Neural Studio
            <Sparkles className="inline ml-3 group-hover:rotate-12 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;