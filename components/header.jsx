import React from "react";
import Link from "next/link";

const Header = ({
  logoUrl = "/assets/image/header-logo.png", // Default logo path in public folder
  links = [
    { label: "John", href: "/profile" },
    { label: "EN", href: "/lang" },
    { label: "heart", href: "/likes" },
    { label: "cart", href: "/cart", value: 1 },
  ],
  tabs = [
    { label: "Delivery", href: "/delivery" },
    { label: "Tapau-Together", href: "/" },
    { label: "Pick-up", href: "/pick-up" },
    { label: "pandamart", href: "/pandamart" },
    { label: "Shops", href: "/shops" },
  ],
}) => {
  return (
    <header className="bg-white shadow-md pt-4">
      <div className="container mx-8 flex items-center justify-between px-2 w-100">
        {/* Logo and Brand Name */}
        <a href="/" className="flex items-center space-x-2 w-35">
          {logoUrl ? (
            <img src={logoUrl} alt="Logo" className="object-contain" />
          ) : (
            <h1>Missing Image</h1>
          )}
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-black-600 p-4 hover:bg-gray-200 rounded-lg"
            >
              <div className="flex items-center">
                {link.label == "John" && (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="fl-interaction-primary"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    data-testid="personal-icon"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 11.5C13.933 11.5 15.5 9.933 15.5 8C15.5 6.067 13.933 4.5 12 4.5C10.067 4.5 8.50001 6.067 8.50001 8C8.50001 9.933 10.067 11.5 12 11.5ZM10.0566 14.2045C10.679 14.071 11.33 14.0001 12 14C12.0003 14 12.0007 14 12.001 14C12.6709 14 13.3218 14.0708 13.9442 14.2042C17.1008 14.881 19.5251 17.1688 19.9907 20.0041C20.0802 20.5491 19.6241 21 19.0718 21H4.93021C4.37792 21 3.92177 20.5491 4.01127 20.0041C4.47684 17.1692 6.90063 14.8815 10.0566 14.2045ZM10.1743 12.6562C8.31584 11.9269 7.00001 10.1171 7.00001 8C7.00001 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8C17 10.1169 15.6845 11.9265 13.8263 12.656C13.2609 12.8779 12.6452 12.9999 12.001 13C12.0007 13 12.0003 13 12 13C11.3557 13 10.7399 12.8781 10.1743 12.6562ZM18.3216 19.5C17.5644 17.2951 15.1351 15.5 12.001 15.5C8.86687 15.5 6.43759 17.2951 5.6804 19.5H18.3216Z"
                    ></path>
                  </svg>
                )}
                {link.label == "EN" && (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="fl-none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM10.6635 19.3813C9.79267 18.1369 9.11658 16.9361 8.65036 15.75H5.50337C6.58707 17.6234 8.45784 18.9845 10.6635 19.3813ZM4.84335 14.25H8.17237C7.98964 13.4966 7.89523 12.7442 7.8931 11.9853C7.891 11.2379 7.97842 10.4952 8.15242 9.75H4.84335C4.62027 10.4603 4.5 11.2161 4.5 12C4.5 12.7839 4.62027 13.5397 4.84335 14.25ZM5.50337 8.25H8.61663C9.06884 7.07159 9.72906 5.8752 10.586 4.63309C8.41405 5.04747 6.57436 6.39858 5.50337 8.25ZM18.4966 15.75C17.4415 17.574 15.6402 18.9124 13.5102 19.3479C14.3698 18.1154 15.038 16.9255 15.5 15.75H18.4966ZM19.1566 14.25H15.978C16.1608 13.4966 16.2552 12.7442 16.2573 11.9853C16.2594 11.2379 16.172 10.4952 15.998 9.75H19.1566C19.3797 10.4603 19.5 11.2161 19.5 12C19.5 12.7839 19.3797 13.5397 19.1566 14.25ZM18.4966 8.25H15.5338C15.0859 7.08283 14.4339 5.89803 13.5888 4.66862C15.6845 5.12065 17.4545 6.44847 18.4966 8.25ZM12.0752 5.12312C12.8682 6.22942 13.4764 7.26325 13.9116 8.25H10.2388C10.674 7.26325 11.2822 6.22942 12.0752 5.12312ZM9.69994 9.75H14.4504C14.6591 10.5113 14.7593 11.2505 14.7573 11.981C14.7552 12.7258 14.6467 13.4775 14.4269 14.25H9.72354C9.50364 13.4775 9.39519 12.7258 9.3931 11.981C9.39105 11.2505 9.49129 10.5113 9.69994 9.75ZM10.2783 15.75H13.8721C13.4389 16.7093 12.8428 17.7109 12.0752 18.7788C11.3076 17.7109 10.7115 16.7093 10.2783 15.75Z"
                    ></path>
                  </svg>
                )}
                {(link.label === "John" || link.label === "EN") && (
                  <span className="mx-2 font-semibold">{link.label}</span>
                )}

                {link.label == "heart" && (
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    className="fl-interaction-primary"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    data-testid="favorite-entry-not-active"
                  >
                    <path
                      d="M18.338 4.438c2.764 1.316 4.015 4.757 2.795 7.686-1.548 3.243-4.436 5.835-8.665 7.776-.254.114-.543.13-.807.05l-.13-.05c-4.228-1.94-7.116-4.533-8.664-7.776-1.22-2.93.031-6.37 2.795-7.686 1.89-.9 3.826-.315 5.378.855.112.084.246.195.403.333l.286.257a.4.4 0 00.542 0l.315-.283c.145-.125.27-.228.374-.307 1.555-1.171 3.49-1.754 5.378-.855zm-.644 1.355c-1.178-.56-2.506-.3-3.831.699l-.151.12c-.115.096-.258.222-.427.376-.207.19-.553.467-1.038.83a.4.4 0 01-.487-.007 99.836 99.836 0 00-.909-.708l-.13-.11-.158-.143a7.024 7.024 0 00-.426-.36c-1.323-.997-2.652-1.258-3.83-.697-2.032.966-2.972 3.553-2.086 5.685 1.335 2.798 3.822 5.087 7.52 6.863l.259.122.259-.121c3.561-1.711 5.998-3.895 7.34-6.493l.149-.301c.888-2.133.034-4.627-1.867-5.66l-.187-.095z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                )}
                {link.label == "cart" && (
                  <>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      className="fl-none"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.0021 2C14.5418 2 16.4241 3.6512 16.5538 6.15854H19.8491C20.4014 6.15854 20.8491 6.60625 20.8491 7.15854C20.8491 7.20585 20.8457 7.25311 20.8391 7.29996L19.1248 19.1414C19.0544 19.6341 18.6325 20 18.1348 20H5.86942C5.37176 20 4.94984 19.6341 4.87947 19.1414L3.16518 7.29996C3.08707 6.75322 3.46697 6.24669 4.0137 6.16859C4.06055 6.16189 4.10781 6.15854 4.15513 6.15854L7.36129 6.16397C7.49108 3.65663 9.46248 2 12.0021 2ZM17.5607 16.25H6.44235C6.22143 16.25 6.04235 16.4291 6.04235 16.65C6.04235 16.669 6.04369 16.6879 6.04638 16.7067L6.25397 18.1567C6.28217 18.3537 6.45092 18.5 6.64993 18.5H17.3533C17.5523 18.5 17.7211 18.3537 17.7492 18.1566L17.9567 16.7066C17.988 16.488 17.836 16.2853 17.6174 16.254C17.5986 16.2513 17.5797 16.25 17.5607 16.25ZM18.8109 7.65854H5.19233C4.97142 7.65854 4.79233 7.83762 4.79233 8.05854C4.79233 8.32251 4.79367 8.09637 4.79635 8.11511L5.71793 14.4066C5.74609 14.6036 5.91486 14.75 6.11391 14.75H17.8891C18.0882 14.75 18.2569 14.6036 18.2851 14.4066L19.2069 8.11513C19.2381 7.89643 19.0862 7.69381 18.8675 7.66256C18.8487 7.65988 18.8298 7.65854 18.8109 7.65854ZM12.0021 3.40323C10.4163 3.40323 9.15495 4.32251 8.91234 5.80175C8.88507 5.96802 8.98943 6.12701 9.15495 6.15854C9.17377 6.16212 9.19289 6.16392 9.21204 6.1639L14.7134 6.15847C14.8772 6.15843 15.0099 6.02566 15.0099 5.86189C15.0099 5.84361 14.9631 5.82209 15.0049 5.80742C14.655 4.32251 13.5918 3.40323 12.0021 3.40323Z"
                      ></path>
                    </svg>
                    {link.value}
                  </>
                )}

                {link.label == "John" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-black-600 group-hover:bg-grey"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button (Optional) */}
        <div className="md:hidden">
          <button
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* show different tabs: delivery, TaPauTogether, pickup, etc.. */}
      <div className="md:flex space-x-4">
        {tabs.map((tab) => (
          <Link
            key={tab.href}
            href={tab.href}
            className="text-gray-600 p-4 border-4 rounded-lg border-transparent hover:bg-gray-200 hover:text-black hover:border-b-black"
          >
            <div className="flex items-center">
              {tab.label == "Delivery" && (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="fl-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.4729 5C14.0587 5 13.7229 5.33566 13.7229 5.74971C13.7229 6.16376 14.0587 6.49941 14.4729 6.49941H17.1729C17.2833 6.49941 17.3729 6.58896 17.3729 6.69941V9.38586C17.3729 9.42859 17.3592 9.4702 17.3338 9.50458L14.154 13.8153C14.1163 13.8664 14.0566 13.8965 13.9931 13.8965H10.3729C10.2624 13.8965 10.1729 13.807 10.1729 13.6965V9.69816C10.1729 9.28411 9.83708 8.94846 9.42287 8.94846H6.02287C5.01565 8.94846 4.19446 9.18295 3.55495 9.62085C2.91419 10.0596 2.51456 10.6624 2.28321 11.297C1.833 12.5318 1.99469 13.9438 2.25118 14.8503C2.34251 15.1731 2.63726 15.3959 2.97287 15.3959H3.57306C3.52524 15.6066 3.5 15.8259 3.5 16.0511C3.5 17.6797 4.82076 18.9999 6.45 18.9999C8.07924 18.9999 9.4 17.6797 9.4 16.0511C9.4 15.8259 9.37476 15.6066 9.32694 15.3959H14.3718C14.6736 15.3959 14.9574 15.2527 15.1365 15.0099L18.6875 10.196C18.8079 10.0328 18.8729 9.83526 18.8729 9.63243V5.94963C18.8729 5.42516 18.4475 5 17.9229 5H14.4729ZM7.74379 15.3959H5.15621C5.05631 15.5927 5 15.8153 5 16.0511C5 16.8516 5.64919 17.5005 6.45 17.5005C7.25081 17.5005 7.9 16.8516 7.9 16.0511C7.9 15.8153 7.84369 15.5927 7.74379 15.3959ZM8.67287 13.8565C8.67287 13.8786 8.65496 13.8965 8.63287 13.8965H3.57325C3.46237 13.2317 3.45914 12.4506 3.69253 11.8104C3.83701 11.4141 4.06488 11.0892 4.40266 10.8579C4.74169 10.6257 5.25009 10.4479 6.02287 10.4479H8.63287C8.65496 10.4479 8.67287 10.4658 8.67287 10.4879V13.8565Z"
                  ></path>
                  <path d="M4.52344 5.99961C4.10922 5.99961 3.77344 6.3354 3.77344 6.74961C3.77344 7.16382 4.10922 7.49961 4.52344 7.49961H9.42344C9.83765 7.49961 10.1734 7.16382 10.1734 6.74961C10.1734 6.3354 9.83765 5.99961 9.42344 5.99961H4.52344Z"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.0957 16.0512C16.0957 14.4225 17.4165 13.1023 19.0457 13.1023C20.6749 13.1023 21.9957 14.4225 21.9957 16.0512C21.9957 17.6798 20.6749 19 19.0457 19C17.4165 19 16.0957 17.6798 16.0957 16.0512ZM19.0457 14.6017C18.2449 14.6017 17.5957 15.2507 17.5957 16.0512C17.5957 16.8517 18.2449 17.5006 19.0457 17.5006C19.8465 17.5006 20.4957 16.8517 20.4957 16.0512C20.4957 15.2507 19.8465 14.6017 19.0457 14.6017Z"
                  ></path>
                </svg>
              )}
              {tab.label == "Tapau-Together" && (
                <svg
                  height="20px"
                  viewBox="-3.03 0 34 34"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  stroke="#000000"
                  strokeWidth="0.00034"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g
                      id="Frame_24"
                      data-name="Frame 24"
                      transform="translate(-16.074 -10)"
                    >
                      {" "}
                      <path
                        id="Path_149"
                        data-name="Path 149"
                        d="M23.994,14a1,1,0,0,0-.762.352l-4.92,5.79a1,1,0,0,0-.233.747L20.092,41.1a1,1,0,0,0,1,.9H34.914a1,1,0,0,0,1-.9l2.012-20.21a1,1,0,0,0-.233-.747l-4.92-5.79A1,1,0,0,0,32.006,14Zm-2.286-.943A3,3,0,0,1,23.994,12h8.012a3,3,0,0,1,2.286,1.057l4.92,5.79a3,3,0,0,1,.7,2.24L37.9,41.3A3,3,0,0,1,34.914,44H21.087A3,3,0,0,1,18.1,41.3l-2.012-20.21a3,3,0,0,1,.7-2.24Z"
                        fill="#2d2d2d"
                        fillRule="evenodd"
                      ></path>{" "}
                      <path
                        id="Path_150"
                        data-name="Path 150"
                        d="M28,33a3,3,0,1,0-3-3A3,3,0,0,0,28,33Zm0,2a5,5,0,1,0-5-5A5,5,0,0,0,28,35Z"
                        fill="#2d2d2d"
                        fillRule="evenodd"
                      ></path>{" "}
                      <path
                        id="Path_151"
                        data-name="Path 151"
                        d="M38,24H18V22H38Z"
                        fill="#2d2d2d"
                        fillRule="evenodd"
                      ></path>{" "}
                      <path
                        id="Path_152"
                        data-name="Path 152"
                        d="M38,38H18V36H38Z"
                        fill="#2d2d2d"
                        fillRule="evenodd"
                      ></path>{" "}
                      <path
                        id="Path_153"
                        data-name="Path 153"
                        d="M39.5,10.134a1,1,0,0,1,.366,1.366l-3,5.2-1.732-1,3-5.2A1,1,0,0,1,39.5,10.134Z"
                        fill="#2d2d2d"
                        fillRule="evenodd"
                      ></path>{" "}
                      <path
                        id="Path_154"
                        data-name="Path 154"
                        d="M43.718,12.293a1,1,0,0,1,0,1.414l-5.657,5.657L36.646,17.95,42.3,12.293A1,1,0,0,1,43.718,12.293Z"
                        fill="#2d2d2d"
                        fillRule="evenodd"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              )}
              {tab.label == "Pick-up" && (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="fl-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.978 7.6715C11.3804 7.76979 11.6269 8.17567 11.5286 8.57805L10.4015 13.1922C10.1984 14.0233 10.5609 14.8897 11.2953 15.3287L12.4349 16.0098C13.5296 16.6641 14.4352 17.592 15.0627 18.7022L16.1529 20.631C16.3567 20.9916 16.2296 21.4492 15.869 21.653C15.5084 21.8568 15.0509 21.7297 14.8471 21.3691L13.7569 19.4403C13.2574 18.5566 12.5366 17.8181 11.6654 17.2974L10.5258 16.6162C9.22642 15.8396 8.5851 14.3067 8.94431 12.8362L10.0714 8.2221C10.1697 7.81972 10.5756 7.57321 10.978 7.6715Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.3325 8.36177C14.7402 8.43496 15.0114 8.8248 14.9382 9.23249L14.2 9.09997C14.9382 9.23249 14.9382 9.23239 14.9382 9.23249L14.9375 9.23651L14.9357 9.24613L14.9292 9.2815C14.9235 9.31205 14.9151 9.35628 14.9042 9.41253C14.8824 9.52499 14.8502 9.68571 14.8085 9.8813C14.7253 10.2717 14.6033 10.8048 14.4485 11.3723C14.2945 11.9371 14.1041 12.5502 13.882 13.0954C13.6695 13.6168 13.3926 14.1679 13.0302 14.5302C12.7373 14.8231 12.2625 14.8231 11.9696 14.5302C11.6767 14.2373 11.6767 13.7624 11.9696 13.4695C12.1072 13.3319 12.2928 13.0205 12.4929 12.5294C12.6833 12.0621 12.8554 11.5127 13.0014 10.9776C13.1466 10.445 13.2622 9.9407 13.3415 9.56861C13.381 9.38297 13.4114 9.2312 13.4317 9.12647C13.4419 9.07413 13.4496 9.0336 13.4546 9.00653L13.4602 8.97626L13.4615 8.96909L13.4618 8.96757C13.535 8.55993 13.9249 8.28859 14.3325 8.36177Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2 5.8999C13.7523 5.8999 14.2 5.45219 14.2 4.8999C14.2 4.34762 13.7523 3.8999 13.2 3.8999C12.6477 3.8999 12.2 4.34762 12.2 4.8999C12.2 5.45219 12.6477 5.8999 13.2 5.8999ZM13.2 7.3999C14.5807 7.3999 15.7 6.28061 15.7 4.8999C15.7 3.51919 14.5807 2.3999 13.2 2.3999C11.8193 2.3999 10.7 3.51919 10.7 4.8999C10.7 6.28061 11.8193 7.3999 13.2 7.3999Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.7518 9.03582C8.43465 8.66945 7.3 10.1419 7.3 11.3C7.3 11.7142 6.96421 12.05 6.55 12.05C6.13579 12.05 5.8 11.7142 5.8 11.3C5.8 9.12931 7.85651 7.04201 11.0211 7.55986L11.0491 7.56444L14.3767 8.37112C14.7793 8.46871 15.0265 8.87416 14.9289 9.27671C14.8313 9.67926 14.4259 9.92649 14.0233 9.8289L10.7518 9.03582Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.9319 9.72425C14.9407 9.52054 14.95 9.30432 14.95 9.0999C14.95 8.68569 14.6142 8.3499 14.2 8.3499C13.7858 8.3499 13.45 8.68569 13.45 9.0999C13.45 9.26992 13.4422 9.45254 13.4332 9.66234C13.4322 9.68501 13.4312 9.708 13.4302 9.73132C13.4204 9.96302 13.4104 10.2211 13.4138 10.4846C13.4206 11.006 13.4791 11.6116 13.7361 12.1827C14.0036 12.7772 14.4656 13.2886 15.1906 13.638C15.8945 13.9773 16.8156 14.1499 18 14.1499C18.4142 14.1499 18.75 13.8141 18.75 13.3999C18.75 12.9857 18.4142 12.6499 18 12.6499C16.9444 12.6499 16.2705 12.4934 15.8419 12.2868C15.4344 12.0904 15.2264 11.8393 15.1039 11.5671C14.9709 11.2715 14.9194 10.9063 14.9137 10.4652C14.9109 10.2474 14.919 10.0264 14.9289 9.79504C14.9298 9.77164 14.9309 9.74803 14.9319 9.72425Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.95777 16.366C9.3355 16.536 9.50392 16.98 9.33394 17.3578L9.15059 17.7652C8.64057 18.8986 7.93609 19.934 7.06905 20.8244L6.43735 21.4732C6.14839 21.77 5.67356 21.7763 5.37679 21.4873C5.08002 21.1984 5.07368 20.7235 5.36265 20.4268L5.99434 19.778C6.73926 19.013 7.34452 18.1234 7.78271 17.1497L7.96606 16.7422C8.13604 16.3645 8.58004 16.1961 8.95777 16.366Z"
                  ></path>
                </svg>
              )}
              {tab.label == "pandamart" && (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="fl-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14 2C15.1046 2 16 2.89543 16 4V4.8C16 4.91046 16.0895 5 16.2 5H18C19.1046 5 20 5.89543 20 7V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V7C4 5.89543 4.89543 5 6 5H7.8C7.91046 5 8 4.91046 8 4.8V4C8 2.89543 8.89543 2 10 2H14ZM18.291 16.5H5.702L5.64885 16.5072C5.56422 16.5305 5.50203 16.608 5.5019 16.7L5.50011 20.3L5.50718 20.3532C5.52572 20.4209 5.57901 20.4743 5.64672 20.4929L5.7 20.5H18.2919L18.3451 20.4929C18.4298 20.4696 18.4919 20.392 18.4919 20.3L18.491 16.7L18.4839 16.6468C18.4605 16.5622 18.383 16.5 18.291 16.5ZM7.79936 6.50806H5.70806L5.65491 6.5152C5.57028 6.5385 5.50809 6.61605 5.50794 6.70806L5.50312 14.8L5.51018 14.8532C5.52871 14.9209 5.58201 14.9743 5.64972 14.9929L5.703 15H18.291L18.3442 14.9929C18.4288 14.9696 18.491 14.892 18.491 14.8L18.4919 6.70806L18.4848 6.65489C18.4615 6.57024 18.384 6.50806 18.2919 6.50806H16.1994L16.146 6.51526C16.0613 6.53865 15.9992 6.61625 15.9994 6.70829L16 7.25L15.9932 7.35177C15.9435 7.71785 15.6297 8 15.25 8L15.1482 7.99315C14.7822 7.94349 14.5 7.6297 14.5 7.25L14.4994 6.70782C14.4992 6.59745 14.4097 6.50806 14.2994 6.50806H9.69936L9.64596 6.51526C9.56134 6.53865 9.49925 6.61625 9.49936 6.70829L9.5 7.25L9.49315 7.35177C9.44349 7.71785 9.1297 8 8.75 8C8.33579 8 8 7.66421 8 7.25L7.99936 6.70782C7.99922 6.59745 7.90972 6.50806 7.79936 6.50806ZM14 3.5H10C9.75454 3.5 9.55039 3.67688 9.50806 3.91012L9.5 4V4.8C9.5 4.91046 9.58954 5 9.7 5H14.3C14.4105 5 14.5 4.91046 14.5 4.8V4C14.5 3.75454 14.3231 3.55039 14.0899 3.50806L14 3.5Z"></path>
                </svg>
              )}
              {tab.label == "Shops" && (
                <svg
                  aria-hidden="true"
                  focusable="false"
                  className="fl-none"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.2585 11.1816L21.2573 19.6567C21.2573 20.3522 20.7369 20.9243 20.07 20.9931L19.9347 21H4.0644C3.37964 21 2.81642 20.4714 2.7487 19.7941L2.74187 19.6567L2.74152 11.1824C2.28063 10.667 1.99976 9.98246 1.99976 9.23132L2.00695 9.02552L2.02848 8.82077L2.68496 4.15331C2.77183 3.53567 3.2637 3.0663 3.86401 3.00646L3.9942 3H20.0049C20.6192 3 21.1463 3.42819 21.2895 4.02333L21.3142 4.15331L21.9707 8.82077C22.0958 9.71058 21.8095 10.5637 21.2585 11.1816ZM10.677 19.5H13.3221V15.8955C13.3221 15.2464 12.8688 14.7048 12.2661 14.5795L12.1348 14.5592L11.9996 14.5522C11.3148 14.5522 10.7516 15.0808 10.6839 15.7582L10.677 15.8955V19.5ZM19.7583 11.9525L19.7573 19.5H14.8221V15.8955C14.8221 14.5372 13.8714 13.3811 12.5713 13.1109L12.5338 13.1031L12.2885 13.0651L12.038 13.0522H11.9996C10.5176 13.0522 9.33304 14.1915 9.19132 15.6089L9.18758 15.6463L9.17705 15.8583V19.5H4.24186L4.24155 11.953C4.34993 11.9777 4.46088 11.9961 4.57404 12.0078L4.6125 12.0118L4.81947 12.0224H5.12242C5.9724 12.0224 6.72457 11.6476 7.23825 11.0605C7.69253 11.5794 8.33373 11.9321 9.06539 12.0075L9.10385 12.0115L9.31607 12.0224H9.88353C10.7335 12.0224 11.4857 11.6476 11.9994 11.0605C12.4536 11.5794 13.0948 11.9321 13.8265 12.0075L13.865 12.0115L14.0772 12.0224H14.6446C15.4946 12.0224 16.2468 11.6476 16.7605 11.0605C17.2147 11.5794 17.8559 11.9321 18.5876 12.0075L18.6261 12.0115L18.8383 12.0224H19.1412C19.2735 12.0224 19.4055 12.0129 19.5364 11.9939C19.6116 11.983 19.6856 11.9691 19.7583 11.9525ZM8.03155 5.04175C8.03155 4.80435 8.22102 4.6119 8.45476 4.61194H10.7824C11.0161 4.61198 11.2056 4.80441 11.2057 5.04179L11.2061 9.1791L11.1992 9.31645C11.1315 9.99381 10.5683 10.5224 9.88353 10.5224H9.35452L9.21929 10.5155C8.5524 10.4467 8.03199 9.87461 8.03199 9.1791L8.03155 5.04175ZM17.5538 5.04175C17.5538 4.80435 17.7432 4.6119 17.977 4.61194H19.4086C19.6192 4.61194 19.7977 4.76924 19.8275 4.98101L20.3996 9.04873L20.4115 9.18035C20.4377 9.83419 19.9725 10.4149 19.321 10.5094C19.2615 10.5181 19.2014 10.5224 19.1412 10.5224H18.8767L18.7415 10.5155C18.0746 10.4467 17.5542 9.87461 17.5542 9.1791L17.5538 5.04175ZM3.58679 9.23132L3.59398 9.09418L4.15793 5.07347C4.19507 4.80867 4.41831 4.61194 4.68165 4.61194H5.9155C6.20765 4.61199 6.44448 4.85252 6.44456 5.14925L6.44495 9.1791L6.43812 9.31645C6.3704 9.99381 5.80718 10.5224 5.12242 10.5224H4.85792L4.72795 10.5157C4.08698 10.4496 3.58679 9.89979 3.58679 9.23132ZM12.7931 9.1791L12.7927 5.04175C12.7927 4.80435 12.9821 4.6119 13.2159 4.61194H15.5435C15.7772 4.61198 15.9667 4.80441 15.9668 5.04179L15.9672 9.1791L15.9603 9.31645C15.8926 9.99381 15.3294 10.5224 14.6446 10.5224H14.1156L13.9804 10.5155C13.3135 10.4467 12.7931 9.87461 12.7931 9.1791Z"
                  ></path>
                </svg>
              )}

              <span className="mx-2 font-semibold">{tab.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
