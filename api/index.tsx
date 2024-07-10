import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'
import type { Address } from 'viem'
import { abi } from '../abi.js'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

const arbitrumChain = {
  id: 421614,
  name: 'Arbitrum Sepolia',
  network: 'arbitrum',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: 'https://endpoints.omniatech.io/v1/arbitrum/sepolia/public',
  },
  blockExplorers: {
    etherscan: { name: 'Arbiscan', url: 'https://sepolia.arbiscan.io' },
    default: { name: 'Arbiscan', url: 'https://sepolia.arbiscan.io' },
  },
  testnet: true,
};

export const app = new Frog({
  assetsPath: '/',
  basePath: '/api',
  // Supply a Hub to enable frame verification.
  // hub: neynar({ apiKey: 'NEYNAR_FROG_FM' })
})

app.frame('/firstframe', (c) => {
  const { buttonValue, inputText, status } = c
  const fruit = inputText || buttonValue
  return c.res({
    image: (
      <div
        style={{
          alignItems: 'center',
          background:
            status === 'response'
              ? 'linear-gradient(to right, #432889, #17101F)'
              : 'black',
          backgroundSize: '100% 100%',
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          height: '100%',
          justifyContent: 'center',
          textAlign: 'center',
          width: '100%',
        }}
      >
        <div
          style={{
            color: 'white',
            fontSize: 60,
            fontStyle: 'normal',
            letterSpacing: '-0.025em',
            lineHeight: 1.4,
            marginTop: 30,
            padding: '0 120px',
            whiteSpace: 'pre-wrap',
          }}
        >
          {status === 'response'
            ? `Nice choice.${fruit ? ` ${fruit.toUpperCase()}!!` : ''}`
            : 'Welcome!'}
        </div>
      </div>
    ),
    intents: [
      <TextInput placeholder="Enter custom fruit..." />,
      <Button value="apples">Apples</Button>,
      <Button value="oranges">Oranges</Button>,
      <Button value="bananas">Bananas</Button>,
      status === 'response' && <Button.Reset>Reset</Button.Reset>,
    ],
  })
})


app.frame('/dd', (c) => {
    let image;
    let intents;

    


        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/QmdQ2DVqnVhNBL2CSVZqBWDxp3r2khvpMYNVEzDoki9k8T';
        intents = [
           
           <Button action="/second">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});

app.frame('/second', (c) => {
    let image;
    let intents;

    


        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/QmP41YiwCDfjPQAKpu7p6n2SH2UvRAR3LsnuxxvXZycXtB';
        intents = [
           
           <Button action="/third">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});

app.frame('/third', (c) => {
    let image;
    let intents;

    


        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/QmSwACUHCFhqmUq1GM6airFGkKUfmuMEWvPh2yoedTFusY';
        intents = [
           
           <Button action="/fourth">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});


app.frame('/fourth', (c) => {
    let image;
    let intents;

    


        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/QmYP2C2xKMc1hZL5izw9JcJw4w57JruudKcmGPjuih1D1L';
        intents = [
           
           <Button action="/fifth">Continue</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});

app.frame('/fifth', (c) => {
    let image;
    let intents;

    


        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/QmWMCYiR7zuqUewLBuQb34dKQzaQawBmYPWJB15MzC94qP';
        intents = [
           
           <Button action="/comecloser">Atlas</Button>,
           <Button action="/comecloser">Auron</Button>,
           <Button action="/comecloser">Ayla</Button>,
           <Button action="/comecloser">Caedric</Button>,
        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});


app.frame('/comecloser', (c) => {
    let image;
    let intents;

        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/QmZbJTzsxSQLcrDTvai9ngUzKQKHSYoM7bQ8Vk6Lr1bcL9';
        intents = [
           
           <Button action="/exposed">Approach</Button>,

        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});


app.frame('/exposed', (c) => {
    let image;
    let intents;

        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/Qman5Lds8qBY5uyMfbvvbBSTHmpCEf4XSHtfw3dNvU4vr6';
        intents = [
           
           <Button action="/battle">Attack !!</Button>,

        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});

app.frame('/battle', (c) => {
    let image;
    let intents;

        image = 'https://green-worthwhile-jellyfish-535.mypinata.cloud/ipfs/QmYRqnWiSSNHjzgzwEk9f4Vr5WJNgvsyGciQVnogb1WYqJ';
        intents = [
           
         

        ];


    return c.res({
       
        image: image,
        intents: intents
    });
});







/////////////////

app.frame('/', (c) => {
  return c.res({
    action: '/finish',
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Perform a transaction
      </div>
    ),
    intents: [
      <Button.Transaction target="/mint">Mint</Button.Transaction>,
    ]
  })
})

app.transaction('/mint', (c) => {
  const address = c.address as Address;

  console.log('address', address);
  //console.log('Button', Button.Transaction key);

  return c.contract({
    abi,
    functionName: 'claim',
    args: [
      address, // _receiver
      1n, // _quantity
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // _currency
      0n, // _pricePerToken
      {
        proof: [], // _allowlistProof.proof
        quantityLimitPerWallet: 100n, // _allowlistProof.quantityLimitPerWallet
        pricePerToken: 0n, // _allowlistProof.pricePerToken
        currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // _allowlistProof.currency
      }, // _allowlistProof
      '0x', // _data
    ],
    chainId: `eip155:${arbitrumChain.id}`,
    to: '0x7C5B213CAaf6ebbcB6F1B24a193307261B1F6e69',
  });
});

app.transaction('/mint2', async (c, next) => {
  await next();
  const txParams = await c.res.json();
  txParams.attribution = false;
  console.log(txParams);
  c.res = new Response(JSON.stringify(txParams), {
    headers: {
      "Content-Type": "application/json",
    },
  });
},
async (c) => {
  const address = c.address;

  // console.log('address', address);
  //console.log('Button', Button.Transaction key);

  return c.contract({
    abi,
    functionName: 'claim',
    args: [
      address as `0x${string}`, // _receiver address
      0n, // _tokenId as uint256
      1n, // _quantity as uint256
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE', // _currency address
      0n, // _pricePerToken as uint256
      {
        proof: [], // _allowlistProof.proof as bytes32[]
        quantityLimitPerWallet: 100n, // _allowlistProof.quantityLimitPerWallet as uint256
        pricePerToken: 0n, // _allowlistProof.pricePerToken as uint256
        currency: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE' // _allowlistProof.currency address
      },
      '0x' // _data as bytes
    ],
    chainId: `eip155:421614`,
    to: '0x7C5B213CAaf6ebbcB6F1B24a193307261B1F6e69',
  });
});


app.frame('/finish', (c) => {
  const { transactionId } = c
  return c.res({
    image: (
      <div style={{ color: 'white', display: 'flex', fontSize: 60 }}>
        Transaction ID: {transactionId}
      </div>
    )
  })
})









// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
