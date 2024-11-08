import { CMS_NAME } from "@/lib/constants";

export function Process() {
  return (
    <div className="section mt-16 mb-16 md:mb-12 text-justify">
        <div>
            <h2 className="h2 section-title text-center">
                Our Digital Transformation <span className="has-before">Process</span>
            </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-4 process-elem">
            <div className="p-4">
                <h3>1. Understand</h3>
                <p>Considering your website as your most valuable asset, the initial step to developing it is to deep dive into your brand, business goals, and pain points. Following this, we will create a timeline and project plan to successfully launch your website.</p>
            </div>
            <div className="p-4">
                <h3>2. Prototype</h3>
                <p>After understanding what your brand and business goals are, we create mid fidelity wireframes to visually map out user flows. This pivotal step ensures the user experience is optimal before beginning the design of your website or web application.</p>
            </div>
            <div className="p-4">
                <h3>3. Design</h3>
                <p>A superb website or web application begins with exceptional user experience and design. Our design team focuses on modern, human-centered design principles to ensure your site or app is not only visually appealing but also intuitive and easy to navigate.</p>
            </div>

            <div className="p-4">
                <h3>4. Build</h3>
                <p>With the design finalised and everyone eager to bring your website or web app to life, we schedule a kickoff meeting with the development team. This marks the beginning of our first fortnightly sprint. At the end of each sprint, our team runs you through a 'show & tell' ceremony to keep you updated on the progress.</p>
            </div>
            <div className="p-4">
                <h3>5. Launch</h3>
                <p>Following a comprehensive User Acceptance Testing phase, we prepare your web app for a seamless launch. Our team supports you throughout the entire process to ensure everything goes smoothly.</p>
            </div>
            <div className="p-4">
                <h3>6. Support</h3>
                <p>Your website or web app is now live, and our team is here to provide ongoing support, implement new features, and address any necessary bug fixes. We'll continue to support you every step of the way.</p>
            </div>
        </div>
    </div>
  );
}
