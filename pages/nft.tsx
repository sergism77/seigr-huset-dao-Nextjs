import { Container, Row, Col } from 'reactstrap';
import { useEffect, useState } from 'react';
import { useEditionDrop } from '@thirdweb-dev/react';

function NFT() {
    return <div>
        <br/>
        <br/>
        <br/>
        <Container>
        <Row>
            <Col>
            <div>
            <iframe
    src="https://gateway.ipfscdn.io/ipfs/QmeySjr2uTEuwo3nihtZMthwM5rzGc4UNg56ceLAJzizx2/bundledrop.html?contract=0x71fc05dE44C26CDF9a43c4Ed22E93f18E45C60F5&chainId=137&tokenId=1&rpcUrl=https://polygon-mainnet.g.alchemy.com/v2/z42wSEnZPMEPpgfjpVwl0N_RP86FxH4j"    
    width="600px"
    height="700px"
    frameBorder="0"
             ></iframe>
    </div>
          </Col>
            <Col>
            <div>
            <iframe
    src="https://gateway.ipfscdn.io/ipfs/QmeySjr2uTEuwo3nihtZMthwM5rzGc4UNg56ceLAJzizx2/bundledrop.html?contract=0x71fc05dE44C26CDF9a43c4Ed22E93f18E45C60F5&chainId=137&tokenId=2&rpcUrl=https://polygon-mainnet.g.alchemy.com/v2/z42wSEnZPMEPpgfjpVwl0N_RP86FxH4j"
    width="600px"
    height="700px"
    frameBorder="0"
             ></iframe>
    </div>
          </Col>
          </Row>
          <Row>
            <Col>
            <div>
            <iframe
    src="https://gateway.ipfscdn.io/ipfs/QmeySjr2uTEuwo3nihtZMthwM5rzGc4UNg56ceLAJzizx2/bundledrop.html?contract=0x71fc05dE44C26CDF9a43c4Ed22E93f18E45C60F5&chainId=137&tokenId=3&rpcUrl=https://polygon-mainnet.g.alchemy.com/v2/z42wSEnZPMEPpgfjpVwl0N_RP86FxH4j"
    width="600px"
    height="700px"
    frameBorder="0"
             ></iframe>
    </div>
          </Col>
        </Row>
        </Container>
    </div>
  }
  
  export default NFT

