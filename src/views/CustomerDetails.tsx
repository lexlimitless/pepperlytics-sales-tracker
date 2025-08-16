import { useCallback, useEffect, useState } from "react";

import {
  Box,
  Badge,
  ContextView,
  Divider,
  Inline,
  Link,
  Spinner,
  Table,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@stripe/ui-extension-sdk/ui";
import type { ExtensionContextValue } from "@stripe/ui-extension-sdk/context";

import BrandIcon from "./brand_icon.svg";

/**
 * This is a view that is rendered in the Stripe dashboard's customer detail page.
 * In stripe-app.json, this view is configured with stripe.dashboard.customer.detail viewport.
 */
const CustomerDetails = ({
  userContext,
  environment,
}: ExtensionContextValue) => {
  const [attributionData, setAttributionData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get customer ID from environment
  const customerId = environment.objectContext?.id;

  useEffect(() => {
    const fetchAttributionData = async () => {
      if (!customerId) {
        setLoading(false);
        return;
      }

      try {
        // This would call your Pepperlytics API to get attribution data
        // For now, showing mock data structure
        const mockData = [
          {
            date: "2024-01-15",
            campaign: "YouTube Video: Building SaaS",
            short_code: "ytb-123",
            amount: "$49.99",
            source: "Direct link click"
          },
          {
            date: "2024-01-10", 
            campaign: "Blog Post: Marketing Tips",
            short_code: "blog-456",
            amount: "$29.99",
            source: "Email campaign"
          }
        ];
        
        setAttributionData(mockData);
        setLoading(false);
      } catch (err) {
        setError("Failed to load attribution data");
        setLoading(false);
      }
    };

    fetchAttributionData();
  }, [customerId]);

  return (
    <ContextView
      title="Sales Attribution"
      brandColor="#7C3AED"
      brandIcon={BrandIcon}
      externalLink={{
        label: "Pepperlytics Dashboard",
        href: "https://app.pepperlytics.com",
      }}
    >
      <Box css={{ stack: "y", gap: "large" }}>
        <Box css={{ font: "heading" }}>Marketing Attribution</Box>
        
        {loading ? (
          <Box css={{ align: "center", padding: "large" }}>
            <Spinner size="large" />
          </Box>
        ) : error ? (
          <Box css={{ color: "critical", padding: "medium" }}>
            {error}
          </Box>
        ) : attributionData.length === 0 ? (
          <Box css={{ color: "info", padding: "medium" }}>
            No attribution data found for this customer.
          </Box>
        ) : (
          <Table>
            <TableHeader>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Campaign</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Source</TableHeaderCell>
            </TableHeader>
            {attributionData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <Box css={{ stack: "y", gap: "small" }}>
                    <Box>{item.campaign}</Box>
                    <Badge type="neutral">{item.short_code}</Badge>
                  </Box>
                </TableCell>
                <TableCell css={{ font: "heading" }}>{item.amount}</TableCell>
                <TableCell>{item.source}</TableCell>
              </TableRow>
            ))}
          </Table>
        )}

        <Divider />
        
        <Box css={{ color: "info", fontSize: "small" }}>
          Track marketing attribution and campaign performance with{" "}
          <Link
            external
            href="https://app.pepperlytics.com"
            target="_blank"
          >
            Pepperlytics
          </Link>
          . This shows which campaigns and links led to this customer's purchases.
        </Box>
      </Box>
    </ContextView>
  );
};

export default CustomerDetails;
