import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Azure AD B2C Test App</h1>

        {session ? (
          <p>
            <button
              onClick={() =>
                (window.location.href = `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.b2clogin.com/${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW}/oauth2/v2.0/logout?post_logout_redirect_uri=${process.env.NEXTAUTH_URL}/signout`)
              }
            >
              Sign Out - Azure AD B2C
            </button>
          </p>
        ) : (
          <p>
            <button onClick={() => signIn("azure-ad-b2c")}>
              Sign In - Azure AD B2C
            </button>
          </p>
        )}
      </main>
    </div>
  );
};

export default Home;
