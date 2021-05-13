import React,{useState} from 'react'
// import '../assets/css/main.css'
const WorkWithBroker = () => {

    const[index,setIndex] = useState(0)
    const slideRight = () => {
        setIndex((index + 1) % 3);
      };
    
      const slideLeft = () => {
        const nextIndex = index - 1;
        if (nextIndex < 0) {
          setIndex(3 - 1); 
        } else {
          setIndex(nextIndex);
        }
      };
      const centerContent = () => {
          switch (index) {
                case 0:
                    return(
                        <div>
                            <img src="https://cdn.centris.ca/public/cms/qc/consumersite/f615d7e5141cb1d0463210264f6890c9/slide-1.jpg" alt="" />
                            <h4>1/10 - Buy or sell at a fair price.</h4>
                            <p>
                                Brokers have access to <a href="">market statistics  and advanced tools</a> that allow them to perform a comparative market analysis. As a <a href="">buyer</a>  or <a href="">seller</a> , you have insurance that you are buying or selling your property at a fair price.
                            </p>
                        </div>
                    )
                case 1:
                    return(
                        <div>
                            <img src="https://cdn.centris.ca/public/cms/qc/consumersite/2d0f803822ee21d8cb44e620d00545e0/slide-2.jpg" alt="" />
                            <h4>2/10 - Benefit from the broker’s understanding of legal documents and procedures.</h4>
                            <p>
                                Your broker will help you fill in the seller’s declaration, prepare and explain all of the clauses in the promise to purchase, and help organize all the documents you need for the signing at the notary’s office. Your broker will also inform you of the steps to take to <a href="">buy</a>  or <a href="">sell a home</a> and can guide you to competent professionals who you may need to consult with.
                            </p>
                        </div>
                    )
                case 2:
                    return(
                        <div>
                            <img src="https://cdn.centris.ca/public/cms/qc/consumersite/56f580d66fb87c341994e521f0954c3e/slide-3.jpg" alt="" />
                            <h4>3/10 - Maximize your property’s visibility and traffic.</h4>
                            <p>
                            Your broker will list your property in the real estate brokers’ Centris system and on the Centris.ca public website. Your home will therefore be available to more than <a href="">13,000 realestate brokers</a> in Québec and their buying clients. It will also be present on the website that contains the largest number of homes for sale in Québec.
                            </p>
                        </div>
                    )
                default:
                    return;
          }
      }

    return (
        <div>
            <h1 className="text-center fw-bolder mt-3 mb-5">10 good reasons to work with a real estate broker</h1>
            <div className="workwithbroker">
                <div className="previous">
                    <button className="prev-btn" onClick={slideLeft}><i class="fas fa-arrow-left"></i></button>
                </div>
                <div className="center-content">
                    {centerContent()}
                </div>
                <div className="next">
                    <button className="next-btn" onClick={slideRight}><i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default WorkWithBroker
