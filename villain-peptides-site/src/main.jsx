
import React from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import {
  Beaker,
  ShieldCheck,
  Truck,
  Mail,
  Search,
  FileText,
  FlaskConical,
  ShoppingCart,
  Lock,
  Scale,
  ClipboardCheck,
  Menu,
} from "lucide-react";
import "./styles.css";

const products = [
  {
    name: "Tirzepatide",
    strength: "60 mg",
    price: "$200",
    category: "Villain Peptide",
    lot: "VP-TZ60-0526A",
    purity: "COA available by batch",
    note: "Lyophilized research peptide. Premium villain series.",
    shipping: "Free Shipping",
    storage: "Store according to label and COA guidance.",
  },
  {
    name: "Retatrutide",
    strength: "20 mg",
    price: "$170",
    category: "Villain Peptide",
    lot: "VP-RT20-0526A",
    purity: "COA available by batch",
    note: "High-purity research compound with batch traceability.",
    shipping: "Free Shipping",
    storage: "Store according to label and COA guidance.",
  },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Focused",
    text: "Batch records, clear labeling, and documentation-first handling.",
  },
  {
    icon: FileText,
    title: "COA Available",
    text: "Certificates of analysis can be listed by lot number for transparency.",
  },
  {
    icon: Truck,
    title: "Free Shipping",
    text: "Free shipping shown for eligible research-only orders.",
  },
];

function Button({ children, variant = "primary", className = "", ...props }) {
  return (
    <button className={`btn ${variant === "outline" ? "btn-outline" : "btn-primary"} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`}>{children}</div>;
}

function App() {
  const total = products.reduce((sum, product) => sum + Number(product.price.replace("$", "")), 0);

  return (
    <div className="site">
      <header className="header">
        <div className="header-inner">
          <a className="brand" href="#home">
            <div className="brand-icon"><FlaskConical size={22} /></div>
            <div>
              <p className="brand-title">Villain Peptides</p>
              <p className="brand-subtitle">Research use only • Villain Series</p>
            </div>
          </a>

          <nav className="nav">
            <a href="#products">Products</a>
            <a href="#batch">Batch Lookup</a>
            <a href="#checkout">Checkout</a>
            <a href="#legal">Legal</a>
            <a href="#contact">Contact</a>
          </nav>

          <Button className="desktop-only">Request COA</Button>
          <Menu className="mobile-only" />
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="glow glow-purple"></div>
          <div className="glow glow-green"></div>

          <div className="hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="pill">
                <Beaker size={16} /> Laboratory research materials
              </div>
              <h1>Villain-grade research peptides for elite labs.</h1>
              <p className="hero-copy">
                A dark purple and neon green research-only catalog with batch transparency, COA requests, product details, and an order-request checkout flow.
              </p>
              <div className="hero-actions">
                <a href="#products"><Button>View Catalog</Button></a>
                <a href="#contact"><Button variant="outline">Contact Us</Button></a>
              </div>
              <p className="disclaimer">
                Disclaimer: Villain Peptides products are strictly for laboratory research use only. Not for human consumption, medical use, diagnosis, treatment, or prevention of disease.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }}>
              <Card className="featured-card">
                <div className="featured-inner">
                  <div className="featured-head">
                    <div>
                      <p>Featured batch</p>
                      <h2>Tirzepatide 60 mg</h2>
                    </div>
                    <span>COA Ready</span>
                  </div>
                  <div className="specs">
                    <div><span>Format</span><strong>Lyophilized vial</strong></div>
                    <div><span>Use</span><strong>Research only</strong></div>
                    <div><span>Lot</span><strong>VP-TZ60-0526A</strong></div>
                    <div><span>Shipping</span><strong>Free</strong></div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        <section id="quality" className="section">
          <div className="feature-grid">
            {features.map((item) => (
              <Card key={item.title}>
                <item.icon className="feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="products" className="section">
          <div className="section-head">
            <div>
              <p className="eyebrow">Catalog</p>
              <h2>Research Products</h2>
            </div>
            <div className="search-box"><Search size={16} /> Search by compound, strength, or lot</div>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <Card key={product.name} className="product-card">
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="strength">{product.strength}</p>
                <p className="price">{product.price}</p>
                <p className="note">{product.note}</p>
                <p className="shipping">{product.shipping}</p>
                <a href="#details"><Button variant="outline">View Details</Button></a>
              </Card>
            ))}
          </div>
        </section>

        <section id="batch" className="section">
          <div className="section-head single">
            <p className="eyebrow green">Verification</p>
            <h2>Batch & COA Lookup</h2>
            <p>Enter a lot number from the vial label to request or verify documentation for research records.</p>
          </div>
          <Card className="batch-card">
            <div className="batch-form">
              <input placeholder="Example: VP-TZ60-0526A" />
              <Button>Lookup COA</Button>
            </div>
            <div className="batch-grid">
              {products.map((product) => (
                <div key={product.lot} className="batch-item">
                  <p>{product.name}</p>
                  <strong>Lot: {product.lot}</strong>
                  <span>{product.purity}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section id="details" className="section">
          <div className="section-head single">
            <p className="eyebrow">Product Pages</p>
            <h2>Research Product Details</h2>
          </div>
          <div className="detail-grid">
            {products.map((product) => (
              <Card key={product.name + "details"} className="detail-card">
                <div className="detail-top">
                  <div>
                    <p className="product-category green">{product.category}</p>
                    <h3>{product.name}</h3>
                    <p>{product.strength}</p>
                  </div>
                  <div className="price-badge">{product.price}</div>
                </div>
                <div className="detail-specs">
                  <div><span>Batch Number</span><strong>{product.lot}</strong></div>
                  <div><span>Documentation</span><strong>{product.purity}</strong></div>
                  <div><span>Shipping</span><strong className="green-text">{product.shipping}</strong></div>
                  <div><span>Storage</span><strong>{product.storage}</strong></div>
                </div>
                <p className="fine-print">Research use only. Not for human consumption. No dosing, medical, or therapeutic guidance is provided.</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="checkout" className="section">
          <div className="section-head single">
            <p className="eyebrow green">Secure Order Request</p>
            <h2>Checkout-Style Request</h2>
            <p>This section is designed like checkout, but can be used as an inquiry/order-request flow before connecting any payment processor.</p>
          </div>
          <Card className="checkout-card">
            <div>
              <div className="checkout-title"><ShoppingCart /><h3>Order Summary</h3></div>
              <div className="cart-items">
                {products.map((product) => (
                  <div key={product.name + "cart"} className="cart-item">
                    <div>
                      <strong>{product.name} {product.strength}</strong>
                      <span>{product.shipping}</span>
                    </div>
                    <b>{product.price}</b>
                  </div>
                ))}
                <div className="cart-total"><strong>Total</strong><strong>${total}</strong></div>
              </div>
              <p className="processor-note"><Lock size={16} /> Payment processor connection should be reviewed for compliance before launch.</p>
            </div>
            <div className="checkout-form">
              <input placeholder="Full name" />
              <input placeholder="Email" />
              <input placeholder="Shipping state / region" />
              <textarea placeholder="Research organization / notes" />
              <Button>Submit Order Request</Button>
            </div>
          </Card>
        </section>

        <section id="legal" className="section">
          <div className="section-head single">
            <p className="eyebrow">Compliance</p>
            <h2>Legal Pages</h2>
          </div>
          <div className="legal-grid">
            <Card><Scale className="feature-icon" /><h3>Terms of Use</h3><p>All products are sold strictly for laboratory research. Buyer agrees products are not for human or veterinary consumption.</p></Card>
            <Card><ClipboardCheck className="feature-icon" /><h3>Research Disclaimer</h3><p>No statements on this website are medical advice. No claims are made regarding diagnosis, treatment, prevention, or cure.</p></Card>
            <Card><Lock className="feature-icon" /><h3>Privacy Policy</h3><p>Customer inquiry details are used only for documentation requests, communication, fulfillment review, and compliance records.</p></Card>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <Card className="contact-card">
            <div>
              <Mail className="contact-icon" />
              <h2>Request documentation or wholesale info.</h2>
              <p>Use this section for a contact form, COA lookup, lab verification, or business inquiry intake.</p>
            </div>
            <div className="contact-form">
              <input placeholder="Name" />
              <input placeholder="Email" />
              <textarea placeholder="Message" />
              <Button>Send Inquiry</Button>
            </div>
          </Card>
        </section>
      </main>

      <footer>
        © 2026 Villain Peptides. Research use only. Not for human consumption. Free shipping shown for eligible research orders. Final legal review recommended before accepting payments.
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
