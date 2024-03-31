import React, { useState, useEffect } from "react";
import { Sidebar } from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.ItemGroup>
        <Link to="/dashboard?tab=profile">
          <Sidebar.Item
            active={tab === "profile"}
            icon={HiUser}
            label={"User"}
            labelColor="dark"
            as='div'
          >
            Profile
          </Sidebar.Item>
        </Link>
        <Sidebar.Item icon={HiArrowSmRight} className="cursor-pointer">
          Log out
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar>
  );
}

export default DashSidebar;
