import { motion } from 'framer-motion'
import { Shield, Database, Lock, Eye, Cookie, Globe } from 'lucide-react'

const Privacy = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8"
        >
          Privacy Policy
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Information We Collect
            </h2>
            <p className="text-gray-300 mb-4">
              We collect information you provide directly to us, including when you create an account, make a purchase, or contact us.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Personal information (name, email, address, phone number)</li>
              <li>• Payment information (processed securely through third-party providers)</li>
              <li>• Account credentials (username, password)</li>
              <li>• Shopping cart and order history</li>
              <li>• Communication preferences</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Database className="w-6 h-6 text-primary" />
              How We Use Your Information
            </h2>
            <p className="text-gray-300 mb-4">
              We use the information we collect to provide, maintain, and improve our services.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Process and fulfill your orders</li>
              <li>• Send you order confirmations and shipping updates</li>
              <li>• Respond to your inquiries and provide customer support</li>
              <li>• Send promotional communications (with your consent)</li>
              <li>• Detect and prevent fraud and abuse</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              Data Security
            </h2>
            <p className="text-gray-300 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• SSL encryption for all data transmission</li>
              <li>• Secure payment processing through PCI-compliant providers</li>
              <li>• Regular security audits and updates</li>
              <li>• Restricted access to personal data</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Eye className="w-6 h-6 text-primary" />
              Your Privacy Rights
            </h2>
            <p className="text-gray-300 mb-4">
              You have certain rights regarding your personal information.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Access to your personal information</li>
              <li>• Correction of inaccurate information</li>
              <li>• Deletion of your personal information</li>
              <li>• Opt-out of marketing communications</li>
              <li>• Data portability</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
            <p className="text-gray-300 mb-4">
              We do not sell your personal information. We may share your information in limited circumstances.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• With service providers who perform services on our behalf</li>
              <li>• To comply with legal obligations</li>
              <li>• To protect our rights and property</li>
              <li>• With your consent for specific purposes</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Cookie className="w-6 h-6 text-primary" />
              Cookies
            </h2>
            <p className="text-gray-300 mb-4">
              We use cookies and similar technologies to enhance your experience, analyze usage, and assist in our marketing efforts.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Essential cookies for basic functionality</li>
              <li>• Analytics cookies to understand user behavior</li>
              <li>• Marketing cookies for personalized content</li>
              <li>• You can manage cookie preferences through your browser settings</li>
            </ul>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <p className="text-gray-300">
              Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-gray-300">
              Our services are not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete it.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              International Data Transfers
            </h2>
            <p className="text-gray-300">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </div>

          <div className="card">
            <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Privacy
