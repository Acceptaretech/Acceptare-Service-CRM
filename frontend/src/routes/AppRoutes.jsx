import React from "react";
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layout
import MainLayout from "../layout/MainLayout";

// Pages
import Dashboard from "../pages/dashboard/Dashboard";
import Persons from "../pages/persons/Persons";
import Organizations from "../pages/organizations/Organizations";
import FollowUps from "../pages/followups/FollowUps";
import Calls from "../pages/calls/Calls";
import Tasks from "../pages/tasks/Tasks";
import Expenses from "../pages/expenses/Expenses";
import Deals from "../pages/Deals";
import OpenDeals from "../pages/deals/OpenDeals";
import WonDeals from "../pages/deals/WonDeals";
import LostDeals from "../pages/deals/LostDeals";
import Leads from "../pages/Leads";
import LeadGroups from "../pages/lead-groups/LeadGroups";

// Reports
import DealsReport from "../pages/reports/DealsReport";
import ProposalReport from "../pages/reports/ProposalReport";
import PipelineReport from "../pages/reports/PipelineReport";
import PaymentHistory from "../pages/reports/PaymentHistory";

const AppRoutes = () => {
  return (
    <Routes>
      {/* MAIN LAYOUT */}
      <Route element={<MainLayout />}>
        {/* DEFAULT */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* DASHBOARD */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* MASTER MODULES */}
        <Route path="/persons" element={<Persons />} />
        <Route path="/organizations" element={<Organizations />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/leads/groups" element={<LeadGroups />} />

        {/* ACTIVITY */}
        <Route path="/followups" element={<FollowUps />} />
        <Route path="/calls" element={<Calls />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/expenses" element={<Expenses />} />

        {/* DEALS WITH SUB ROUTES */}
        <Route path="/deals" element={<Deals />}>
          <Route path="open" element={<OpenDeals />} />
          <Route path="won" element={<WonDeals />} />
          <Route path="lost" element={<LostDeals />} />
        </Route>

        {/* REPORTS WITH SUB ROUTES */}
        <Route path="/reports">
          <Route path="deals" element={<DealsReport />} />
          <Route path="proposal" element={<ProposalReport />} />
          <Route path="pipeline" element={<PipelineReport />} />
          <Route
            path="payment-history"
            element={<PaymentHistory />}
          />
        </Route>

        {/* Activities */}
        <Route path="/activities/list" element={<ActivityList />} />
        <Route path="/activities/calendar" element={<ActivityCalendar />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;