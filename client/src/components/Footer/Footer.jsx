import React from "react";

const Footer = () => {
  return (
    <footer className="px-8 py-10 border-t border-[#00000014] text-sm text-gray-400">
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div>
          <div className="font-semibold text-white mb-2">QuizMaster</div>
          <p className="max-w-xs">Empowering education through technology.</p>
        </div>

        <div className="flex gap-12">
          <div>
            <h4 className="text-white mb-2">Product</h4>
            <ul className="space-y-1">
              <li>Features</li>
              <li>Pricing</li>
              <li>Changelog</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-2">Resources</h4>
            <ul className="space-y-1">
              <li>Docs</li>
              <li>Help Center</li>
              <li>Community</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-8 text-center text-xs">
        © 2025 QuizMaster Inc. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
