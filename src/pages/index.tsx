import { GetStaticProps } from "next"
import Head from "next/head";

import { SubscribeButton } from "../components/SubscribeButton";

import styles from "./home.module.scss";

import { stripe } from "../services/stripe"

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section>
          <span>
            👏 Hey, welcome! as
          </span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} per month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="/images/avatar.svg" alt="Girl coding" />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1IXsG9JY8LdL1YQ8VBcq5HGH', {
    expand: ['product']
  });

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100),

  }
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24 hours
  }
}