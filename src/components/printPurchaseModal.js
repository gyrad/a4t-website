import React, { useState, useEffect } from "react"
import axios from "axios"
import Modal from "react-modal"
import { injectStripe, CardElement } from "react-stripe-elements"
import styled from "styled-components"

Modal.setAppElement("#___gatsby")

const PrintPurchaseModal = ({
  className,
  isOpen,
  closeModal,
  stripe,
  title,
  total,
  setCart,
  items,
  setIsOpen,
  totalQuantity,
}) => {
  const contentClassName = `${className}__content`
  const overlayClassName = `${className}__overlay`

  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [stateProvince, setStateProvince] = useState("")
  const [country, setCountry] = useState("United States")

  const [paymentComplete, setPaymentComplete] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)

  const usShipping = 10
  const intShipping = 15

  const [shipping, setShipping] = useState(usShipping)

  const [totalAfterShipping, setTotalAfterShipping] = useState(0)

  let desc = () => {
    let itemsList = ""
    items.forEach((item, i, arr) => {
      itemsList += `Qty. ${item.quantity} - ${item.title} by ${item.artist}`
      if (i === arr.length - 1) {
        itemsList += ". "
      } else {
        itemsList += ", "
      }
    })
    return `Art for Tibet print project. Purchased items: ${itemsList}`
  }

  useEffect(() => {
    let additionalShipping = 0
    if (totalQuantity > 2 && totalQuantity <= 5) {
      additionalShipping = 2 * totalQuantity
    } else if (totalQuantity > 5) {
      additionalShipping = 0.5 * totalQuantity
    }

    if (country === "United States") {
      setShipping(usShipping + additionalShipping)
    } else {
      setShipping(intShipping + additionalShipping)
    }
    setTotalAfterShipping(total + shipping)
  }, [country, shipping, total])

  const resetSuccessAndCloseModal = () => {
    if (paymentComplete) setTimeout(() => setPaymentComplete(false), 1000)
    closeModal()
  }

  const submitHandler = async e => {
    try {
      e.preventDefault()
      setIsConnecting(true)
      const { token } = await stripe.createToken({ name: fullName })
      const response = await axios({
        method: "POST",
        url: "/.netlify/functions/charge",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          charge: {
            currency: "usd",
            amount: totalAfterShipping * 100, // in cents for stripe
            source: token.id,
            shipping: {
              name: fullName,
              address: {
                line1: address,
                city: city,
                state: stateProvince,
                country: country,
                postal_code: token.card.address_zip,
              },
            },
            receipt_email: email,
            description: desc(),
          },
        },
      })

      if (response.status === 200) {
        setPaymentComplete(true)
        setIsConnecting(false)
        setCart([])
        setIsOpen(false)
      }
    } catch (err) {
      setIsConnecting(false)
      alert("We received an error. Please check your card details.")
    }
  }

  const renderForm = (
    <form onSubmit={submitHandler}>
      <div className="form-row form-row--header">
        <h1>{title} </h1>
      </div>
      <div className="form-row">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name*"
          required
          value={fullName}
          onChange={e => setFullName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <CardElement
        className="card-element"
        style={{
          base: {
            color: "black",
            fontSize: "16px",
            "::placeholder": {
              color: "#BBB",
              fontSize: "16px",
            },
          },
        }}
      />

      <div className="form-row">
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Shipping Address*"
          required
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
      </div>
      <div className="form-row">
        <input
          type="text"
          name="city"
          placeholder="City*"
          required
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <input
          type="text"
          name="state"
          placeholder="State/Province*"
          required
          value={stateProvince}
          onChange={e => setStateProvince(e.target.value)}
        />

        <select
          id="country"
          name="country"
          defaultValue={country}
          onChange={e => setCountry(e.target.value)}
        >
          <option value="Afghanistan">Afghanistan</option>
          <option value="Åland Islands">Åland Islands</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="American Samoa">American Samoa</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Anguilla">Anguilla</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Antigua and Barbuda">Antigua and Barbuda</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Aruba">Aruba</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Belize">Belize</option>
          <option value="Benin">Benin</option>
          <option value="Bermuda">Bermuda</option>
          <option value="Bhutan">Bhutan</option>
          <option value="Bolivia">Bolivia</option>
          <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
          <option value="Botswana">Botswana</option>
          <option value="Bouvet Island">Bouvet Island</option>
          <option value="Brazil">Brazil</option>
          <option value="British Indian Ocean Territory">
            British Indian Ocean Territory
          </option>
          <option value="Brunei Darussalam">Brunei Darussalam</option>
          <option value="Bulgaria">Bulgaria</option>
          <option value="Burkina Faso">Burkina Faso</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Cape Verde">Cape Verde</option>
          <option value="Cayman Islands">Cayman Islands</option>
          <option value="Central African Republic">
            Central African Republic
          </option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Christmas Island">Christmas Island</option>
          <option value="Cocos (Keeling) Islands">
            Cocos (Keeling) Islands
          </option>
          <option value="Colombia">Colombia</option>
          <option value="Comoros">Comoros</option>
          <option value="Congo">Congo</option>
          <option value="Congo, The Democratic Republic of The">
            Congo, The Democratic Republic of The
          </option>
          <option value="Cook Islands">Cook Islands</option>
          <option value="Costa Rica">Costa Rica</option>
          <option value="Cote D'ivoire">Cote D'ivoire</option>
          <option value="Croatia">Croatia</option>
          <option value="Cuba">Cuba</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Czech Republic">Czech Republic</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Dominican Republic">Dominican Republic</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="El Salvador">El Salvador</option>
          <option value="Equatorial Guinea">Equatorial Guinea</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Falkland Islands (Malvinas)">
            Falkland Islands (Malvinas)
          </option>
          <option value="Faroe Islands">Faroe Islands</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="French Guiana">French Guiana</option>
          <option value="French Polynesia">French Polynesia</option>
          <option value="French Southern Territories">
            French Southern Territories
          </option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Gibraltar">Gibraltar</option>
          <option value="Greece">Greece</option>
          <option value="Greenland">Greenland</option>
          <option value="Grenada">Grenada</option>
          <option value="Guadeloupe">Guadeloupe</option>
          <option value="Guam">Guam</option>
          <option value="Guatemala">Guatemala</option>
          <option value="Guernsey">Guernsey</option>
          <option value="Guinea">Guinea</option>
          <option value="Guinea-bissau">Guinea-bissau</option>
          <option value="Guyana">Guyana</option>
          <option value="Haiti">Haiti</option>
          <option value="Heard Island and Mcdonald Islands">
            Heard Island and Mcdonald Islands
          </option>
          <option value="Holy See (Vatican City State)">
            Holy See (Vatican City State)
          </option>
          <option value="Honduras">Honduras</option>
          <option value="Hong Kong">Hong Kong</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran, Islamic Republic of">
            Iran, Islamic Republic of
          </option>
          <option value="Iraq">Iraq</option>
          <option value="Ireland">Ireland</option>
          <option value="Isle of Man">Isle of Man</option>
          <option value="Israel">Israel</option>
          <option value="Italy">Italy</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jersey">Jersey</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Korea, Democratic People's Republic of">
            Korea, Democratic People's Republic of
          </option>
          <option value="Korea, Republic of">Korea, Republic of</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Kyrgyzstan">Kyrgyzstan</option>
          <option value="Lao People's Democratic Republic">
            Lao People's Democratic Republic
          </option>
          <option value="Latvia">Latvia</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Lesotho">Lesotho</option>
          <option value="Liberia">Liberia</option>
          <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
          <option value="Liechtenstein">Liechtenstein</option>
          <option value="Lithuania">Lithuania</option>
          <option value="Luxembourg">Luxembourg</option>
          <option value="Macao">Macao</option>
          <option value="Macedonia, The Former Yugoslav Republic of">
            Macedonia, The Former Yugoslav Republic of
          </option>
          <option value="Madagascar">Madagascar</option>
          <option value="Malawi">Malawi</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Maldives">Maldives</option>
          <option value="Mali">Mali</option>
          <option value="Malta">Malta</option>
          <option value="Marshall Islands">Marshall Islands</option>
          <option value="Martinique">Martinique</option>
          <option value="Mauritania">Mauritania</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Mayotte">Mayotte</option>
          <option value="Mexico">Mexico</option>
          <option value="Micronesia, Federated States of">
            Micronesia, Federated States of
          </option>
          <option value="Moldova, Republic of">Moldova, Republic of</option>
          <option value="Monaco">Monaco</option>
          <option value="Mongolia">Mongolia</option>
          <option value="Montenegro">Montenegro</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Morocco">Morocco</option>
          <option value="Mozambique">Mozambique</option>
          <option value="Myanmar">Myanmar</option>
          <option value="Namibia">Namibia</option>
          <option value="Nauru">Nauru</option>
          <option value="Nepal">Nepal</option>
          <option value="Netherlands">Netherlands</option>
          <option value="Netherlands Antilles">Netherlands Antilles</option>
          <option value="New Caledonia">New Caledonia</option>
          <option value="New Zealand">New Zealand</option>
          <option value="Nicaragua">Nicaragua</option>
          <option value="Niger">Niger</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Niue">Niue</option>
          <option value="Norfolk Island">Norfolk Island</option>
          <option value="Northern Mariana Islands">
            Northern Mariana Islands
          </option>
          <option value="Norway">Norway</option>
          <option value="Oman">Oman</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Palau">Palau</option>
          <option value="Palestinian Territory, Occupied">
            Palestinian Territory, Occupied
          </option>
          <option value="Panama">Panama</option>
          <option value="Papua New Guinea">Papua New Guinea</option>
          <option value="Paraguay">Paraguay</option>
          <option value="Peru">Peru</option>
          <option value="Philippines">Philippines</option>
          <option value="Pitcairn">Pitcairn</option>
          <option value="Poland">Poland</option>
          <option value="Portugal">Portugal</option>
          <option value="Puerto Rico">Puerto Rico</option>
          <option value="Qatar">Qatar</option>
          <option value="Reunion">Reunion</option>
          <option value="Romania">Romania</option>
          <option value="Russian Federation">Russian Federation</option>
          <option value="Rwanda">Rwanda</option>
          <option value="Saint Helena">Saint Helena</option>
          <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
          <option value="Saint Lucia">Saint Lucia</option>
          <option value="Saint Pierre and Miquelon">
            Saint Pierre and Miquelon
          </option>
          <option value="Saint Vincent and The Grenadines">
            Saint Vincent and The Grenadines
          </option>
          <option value="Samoa">Samoa</option>
          <option value="San Marino">San Marino</option>
          <option value="Sao Tome and Principe">Sao Tome and Principe</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
          <option value="Senegal">Senegal</option>
          <option value="Serbia">Serbia</option>
          <option value="Seychelles">Seychelles</option>
          <option value="Sierra Leone">Sierra Leone</option>
          <option value="Singapore">Singapore</option>
          <option value="Slovakia">Slovakia</option>
          <option value="Slovenia">Slovenia</option>
          <option value="Solomon Islands">Solomon Islands</option>
          <option value="Somalia">Somalia</option>
          <option value="South Africa">South Africa</option>
          <option value="South Georgia and The South Sandwich Islands">
            South Georgia and The South Sandwich Islands
          </option>
          <option value="Spain">Spain</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Sudan">Sudan</option>
          <option value="Suriname">Suriname</option>
          <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
          <option value="Swaziland">Swaziland</option>
          <option value="Sweden">Sweden</option>
          <option value="Switzerland">Switzerland</option>
          <option value="Syrian Arab Republic">Syrian Arab Republic</option>
          <option value="Taiwan (ROC)">Taiwan (ROC)</option>
          <option value="Tajikistan">Tajikistan</option>
          <option value="Tanzania, United Republic of">
            Tanzania, United Republic of
          </option>
          <option value="Thailand">Thailand</option>
          <option value="Tibet">Tibet</option>
          <option value="Timor-leste">Timor-leste</option>
          <option value="Togo">Togo</option>
          <option value="Tokelau">Tokelau</option>
          <option value="Tonga">Tonga</option>
          <option value="Trinidad and Tobago">Trinidad and Tobago</option>
          <option value="Tunisia">Tunisia</option>
          <option value="Turkey">Turkey</option>
          <option value="Turkmenistan">Turkmenistan</option>
          <option value="Turks and Caicos Islands">
            Turks and Caicos Islands
          </option>
          <option value="Tuvalu">Tuvalu</option>
          <option value="Uganda">Uganda</option>
          <option value="Ukraine">Ukraine</option>
          <option value="United Arab Emirates">United Arab Emirates</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="United States">United States</option>
          <option value="United States Minor Outlying Islands">
            United States Minor Outlying Islands
          </option>
          <option value="Uruguay">Uruguay</option>
          <option value="Uzbekistan">Uzbekistan</option>
          <option value="Vanuatu">Vanuatu</option>
          <option value="Venezuela">Venezuela</option>
          <option value="Viet Nam">Viet Nam</option>
          <option value="Virgin Islands, British">
            Virgin Islands, British
          </option>
          <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
          <option value="Wallis and Futuna">Wallis and Futuna</option>
          <option value="Western Sahara">Western Sahara</option>
          <option value="Yemen">Yemen</option>
          <option value="Zambia">Zambia</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </select>
      </div>
      <div className="form-row form-row--footer">
        <p className="total">
          <span>
            ${total} + ${shipping} (shipping)
          </span>
          <br />
          <strong>Total:</strong> ${totalAfterShipping} USD
        </p>
        <input type="submit" value={isConnecting ? "..." : "Buy"} /> &nbsp;
        <input
          type="button"
          onClick={resetSuccessAndCloseModal}
          value="Close"
        />
      </div>
    </form>
  )

  const renderSuccessMessage = (
    <div className="success-message">
      <div>
        <h1>Payment Successful!</h1>
        <p>
          Thank you for your purchase! You should be receiving your item in the
          mail very soon! We have emailed you a copy of your invoice for your
          records to the email address you provided.
        </p>
        <p>
          Thank you once again, from all of us here at Art for Tibet!{" "}
          <i className="fas fa-heart" />
        </p>
      </div>
      <div>
        <input
          type="button"
          onClick={resetSuccessAndCloseModal}
          value="Close"
        />
      </div>
    </div>
  )

  return (
    <Modal
      portalClassName={className}
      className={contentClassName}
      overlayClassName={overlayClassName}
      isOpen={isOpen}
      onRequestClose={resetSuccessAndCloseModal}
      closeTimeoutMS={500}
    >
      {paymentComplete ? renderSuccessMessage : renderForm}
    </Modal>
  )
}

const StyledPrintPurchaseModal = styled(PrintPurchaseModal)`
  .form-row {
    display: flex;
    flex-direction: column;
    @media (min-width: 600px) {
      flex-direction: row;
    }

    &--header {
      margin: 0 0 1rem;
      padding-bottom: 0.5rem;
      border-bottom: 1px solid #eee;
      flex-direction: row;
      justify-content: space-between;

      h1 {
        flex-grow: 1;
        margin: 0;
        @media (max-width: 600px) {
          font-size: 1.6rem;
          white-space: nowrap;
          overflow: hidden;
          max-width: 100%;
          text-overflow: ellipsis;
        }
      }
      select {
        align-self: center;
        margin-left: 0.5rem;
        @media (min-width: 600px) {
          align-self: flex-end;
        }
      }
    }
    &--footer {
      margin-top: 0.5rem;
      padding-top: 1rem;
      align-items: flex-start;
      flex-direction: row;

      .total {
        flex-grow: 1;
        font-size: 1.2rem;
        line-height: 1.3;
        margin: 0;
        span {
          font-size: 0.8rem;
        }
      }
    }

    input {
      margin-bottom: 0.5rem;
      @media (min-width: 600px) {
        flex: 1;
        min-width: 100px;
        margin-right: 0.5rem;
      }
      :last-child {
        margin-right: 0;
      }
    }

    #country {
      width: 100%;
      @media (min-width: 600px) {
        width: 200px;
      }
    }
  }

  /* The following two classnames were generated by Stripe. */
  .StripeElement {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0rem 0.75rem;
    height: 36px;
    background-color: white;
    margin-bottom: 1.5rem;
  }

  .StripeElement--focus {
    outline: none;
    box-shadow: 0 0 0px 3px rgba(34, 193, 195, 0.3);
    border-color: #6fcdf5 !important;
  }

  &__overlay {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 9999999;
    opacity: 0;
    transition: opacity 0.2s;
    &.ReactModal__Overlay--after-open {
      opacity: 1;
    }
    &.ReactModal__Overlay--before-close {
      opacity: 0;
      transition: opacity 0.4s;
    }
  }

  &__content {
    background: #fff;
    -webkit-overflow-scrolling: touch;
    border-radius: 4px;
    outline: none;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    width: 95%;
    max-width: 600px;
    min-height: 100px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
    transform: translate3d(-50%, -45%, 0) scale(0.9);
    opacity: 0;
    transition: transform 0.5s 0.3s ease-in-out, opacity 0.7s 0.3s ease-in-out;
    &.ReactModal__Content--after-open {
      opacity: 1;
      transform: translate3d(-50%, -50%, 0) scale(1);
    }

    &.ReactModal__Content--before-close {
      opacity: 0;
    }
  }

  .card-element {
    border: 1px solid #ddd;
    border-radius: 3px;
    padding: 0rem 0.75rem;
    background-color: white;
    display: flex;
    align-items: center;

    > * {
      display: block;
      width: 100%;
    }

    :focus {
      outline: none;
      box-shadow: 0 0 0px 3px rgba(34, 193, 195, 0.3);
      border: 1px solid #6fcdf5;
    }
    ::placeholder {
      color: #bbb;
    }
  }

  .success-message {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;

    div:first-child {
      h1 {
        margin: 0 0 1rem;
        padding-bottom: 0.5rem;
        border-bottom: 1px solid #eee;
      }
    }
    div:nth-child(2) {
      text-align: right;
      margin-top: 1rem;
    }
  }
`

export default injectStripe(StyledPrintPurchaseModal)
