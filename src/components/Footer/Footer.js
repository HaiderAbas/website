import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="mx-w-[1240px] mx-auto py-16 px-4 bg-black grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
          North Aims
        </h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et
          justo vulputate, venenatis arcu nec, consectetur quam.
        </p>
        <div className="flex justify-between md:w-[75%] py-8">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 w-full flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400 text-xl font-bold">
            Solutions
          </h6>
          <ul>
            <li className="py-2 text-sm">Analytices</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-xl font-bold">
            Support
          </h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-xl font-bold">
            Company
          </h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400 text-xl font-bold">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Polices</li>
            <li className="py-2 text-sm">terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
