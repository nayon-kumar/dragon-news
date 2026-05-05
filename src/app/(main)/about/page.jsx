import MyContainer from "@/components/Container/MyContainer";
import Image from "next/image";

export const metadata = {
  title: "About Page - Dragon News",
};

const AboutPage = () => {
  return (
    <MyContainer>
      <div className="pt-15">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
              About Us
            </h1>
            <p className="text-gray-600 mt-3">
              Your trusted source for the latest news, insights, and stories.
            </p>
          </div>

          <div>
            <p className="text-gray-600 text-center mb-4">
              We are a modern digital news platform dedicated to delivering
              accurate, fast, and unbiased news from around the world. Our goal
              is to keep readers informed with real-time updates and meaningful
              stories. Our team works 24/7 to bring you the most relevant
              content across politics, technology, sports, entertainment, and
              more.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                Our mission is to provide reliable and high-quality journalism
                that empowers people with knowledge and awareness. We believe in
                truth, transparency, and responsibility.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600">
                We aim to become a leading global news platform that connects
                people through information and helps them make informed
                decisions in their daily lives.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Our Team
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <Image
                  src="https://i.ibb.co.com/ffM44wp/Ellipse-1-10.png"
                  alt="Team Member"
                  width={80}
                  height={80}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold">Mona</h4>
                <p className="text-gray-500 text-sm">Editor-in-Chief</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <Image
                  src="https://i.ibb.co.com/RGXwMmSJ/Ellipse-1-1.png"
                  alt="Team Member"
                  width={80}
                  height={80}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold">Jane Smith</h4>
                <p className="text-gray-500 text-sm">Senior Journalist</p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-1">
                <Image
                  src="https://i.ibb.co.com/8FyK7Xp/Ellipse-1-4.png"
                  alt="Team Member"
                  width={80}
                  height={80}
                  className="w-24 h-24 mx-auto rounded-full mb-4"
                />
                <h4 className="text-lg font-semibold">Alex Pop</h4>
                <p className="text-gray-500 text-sm">Content Writer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default AboutPage;
