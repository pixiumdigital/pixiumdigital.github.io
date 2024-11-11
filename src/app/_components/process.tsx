import { CMS_NAME } from "@/lib/constants";
import Container from "./container";

export function Process() {
  return (
    <Container>
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
                    <p>Outstanding user experience and design are the foundation of any great website or web application. To make sure your website or app is not only aesthetically pleasing but also simple to use and intuitive, our design team adheres to contemporary, human-centered design concepts.</p>
                </div>

                <div className="p-4">
                    <h3>4. Build</h3>
                    <p>We set up a kickoff meeting with the development team once the design is complete and everyone is excited to make your application a reality. We are starting our first sprint every two weeks. To keep you informed of the progress, our team takes you through a "show & tell" ceremony at the conclusion of each sprint.</p>
                </div>
                <div className="p-4">
                    <h3>5. Launch</h3>
                    <p>After a thorough User Acceptance Testing stage, we get your web application ready for a smooth launch. Our staff helps you every step of the way to make sure everything runs without a hitch.</p>
                </div>
                <div className="p-4">
                    <h3>6. Support</h3>
                    <p>Now that your website or web application is operational, our staff is available to offer continuing assistance, add new functionality, and fix any bugs that may arise. We will remain by your side during the entire process.</p>
                </div>
            </div>
        </div>
    </Container>
  );
}
