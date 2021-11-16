import axios from "axios";
import { uuid } from "uuidv4";
enum Api {
  InternalAccount = "https://app.moderntreasury.com/api/internal_accounts",
  CreateCounterParty = "https://app.moderntreasury.com/api/counterparties",
  CreatePaymentOrder = "https://app.moderntreasury.com/api/payment_orders",
}

const API_KEY =
  "test-TAYDCGLorZkQLfAeF8Gcp1WoBdRY1RfdSqHXQpYj9DFWLMozopuTVwZtfwWxLRp3";
const ORG_ID = "9ca2ddc0-59b1-4a63-8b7a-42bdfb77e6b3";

interface Account {
  id: string;
  object: string;
  account_number: string;
  account_number_type?: string;
  created_at: string;
  updated_at: string;
}

interface Routing {
  id: string;
  object: string;
  payment_type: null;
  routing_number: string;
  routing_number_type: string;
  created_at: string;
  updated_at: string;
}

interface Connection {
  id: string;
  object: string;
  vendor_id: string;
  vendor_name: string;
  created_at: string;
  updated_at: string;
}

interface InternalAccount {
  id: string;
  object: string;
  live_mode: boolean;
  account_type?: string;
  party_name: string;
  party_type?: string;
  party_address?: string;
  account_details: Account[];
  routing_details: Routing[];
  name: string;
  metadata?: Object;
  connection: Connection[];
  currency: string;
  created_at: string;
  updated_at: string;
}

async function Solution() {
  const idempotencyKey = uuid();

  async function getInternalAccounts() {
    try {
      const response = await axios.get(Api.InternalAccount, {
        auth: {
          username: ORG_ID,
          password: API_KEY,
        },
      });

      return response.data as InternalAccount[];
    } catch (error) {
      console.log(error);
    }
  }

  async function createCounterParty() {
    try {
      const response = await axios.post(
        Api.CreateCounterParty,
        {
          name: "Kenner, Bach and Ledeen",
          accounts: [
            {
              account_type: "checking",
              routing_details: [
                {
                  routing_number_type: "aba",
                  routing_number: "121141822",
                },
              ],
              account_details: [
                {
                  account_number: "123456789",
                },
              ],
            },
          ],
        },
        {
          auth: {
            username: ORG_ID,
            password: API_KEY,
          },
          headers: {
            "Idempotency-Key": idempotencyKey,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function createPaymentOrder(
    originatingAccountId: string,
    receiverId: string
  ) {
    try {
      const response = await axios.post(
        Api.CreatePaymentOrder,
        {
          type: "ach",
          amount: 1000,
          direction: "credit",
          currency: "USD",
          originating_account_id: originatingAccountId,
          receiving_account_id: receiverId,
        },
        {
          auth: {
            username: ORG_ID,
            password: API_KEY,
          },
          headers: {
            "Idempotency-Key": idempotencyKey,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  const internalAccount = await getInternalAccounts();
  const counterParty = await createCounterParty();
  const paymentOrder = await createPaymentOrder(
    internalAccount[0].id,
    counterParty.accounts[0].id
  );

  console.log(paymentOrder);
}

Solution();
