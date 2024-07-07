import { Button, Frog, TextInput } from 'frog'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'
// import { neynar } from 'frog/hubs'
import { handle } from 'frog/vercel'

// Uncomment to use Edge Runtime.
// export const config = {
//   runtime: 'edge',
// }

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


app.frame('/', (c) => {
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






// @ts-ignore
const isEdgeFunction = typeof EdgeFunction !== 'undefined'
const isProduction = isEdgeFunction || import.meta.env?.MODE !== 'development'
devtools(app, isProduction ? { assetsPath: '/.frog' } : { serveStatic })

export const GET = handle(app)
export const POST = handle(app)
