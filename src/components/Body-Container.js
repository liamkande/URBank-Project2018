import React from 'react'

const BodyContainer = props => {
  return (
    <div>
      <div  className="container body-container">
        <div className="row">
        <h1 className="col-12">
          Best Bank Ever!
        </h1>
        <p className="col-12">
          Pellentesque habitant morbi tristique senectus et netus et <a>malesuada</a> fames ac turpis egestas. Vestibulum tortor quam,
          feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper.
          Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
        </p>
        <p className="col-12">
          <strong>Reasons We’re Awesome:</strong>
        </p>
        <div className="col-8">
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Vestibulum auctor dapibus neque.</li>
          </ul>
        </div>
          <div className="inlineBox col-12 container">
            <div className="mr-5 pr-2">
            <h6><strong>Amazin Mobile Info</strong></h6>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam,feugiat vitae,
              ultricies eget, tempor sit amet, ante.
            </p>
            </div>
            <div className="m-2">
              <img src={props.iphoneImg} className="iphone p-3"/>
            </div>
          </div>
        </div>
        <div className="row">
            <h2 className="mt-5 mb-5">Rates | Check them out.</h2>
            <table className="table">
            <thead>
              <tr className="text-right">
                <td scope="row"></td>
                <td>Annual Percentage Yield</td>
                <td>Est. Earnings for 1 Year*</td>
              </tr>
              <tr className="tr-Color-One">
                <th scope="col">URBank</th>
                <th scope="col" className="text-right">0.87 %</th>
                <th scope="col" className="text-right">$436.89</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr-Color-two">
                <td scope="row">Big Guy Financial</td>
                <td className="text-right">0.75 %</td>
                <td className="text-right">$376.41</td>
              </tr>
              <tr className="tr-Color-One">
                <td scope="row">Dewey, Cheatam & Howe</td>
                <td className="text-right">0.01 %</td>
                <td className="text-right">$5.00</td>
              </tr>
              <tr className="tr-Color-two">
                <td scope="row">First Onion</td>
                <td className="text-right">0.01 %</td>
                <td className="text-right">$5.00</td>
              </tr>
              <tr className="tr-Color-One">
                <td scope="row">Bank of Everywhere</td>
                <td className="text-right">0.01 %</td>
                <td className="text-right">$5.00</td>
              </tr>
              <tr className="tr-Color-two">
                <td scope="row"></td>
                <td></td>
                <td className="text-right">*Based on $50,000 deposit.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default BodyContainer
