import './Footer.css'
import logo from '../../img/logo_blue.svg'
import twitter from '../../img/Vector (2).svg'
import facebook from '../../img/Vector (1).svg'
import instagram from '../../img/Vector.svg'

const Footer = () => {
    return (
        <div>
            <div className='footerMain'>
                <p className='logo'><img src={logo} alt="" />Haven</p>
                <p style={{ marginTop: '30px' }} className='naviP'>For Sale</p>
                <p className='naviP'>For Rent</p>
                <p className='naviP'>Short Let</p>
                <p className='naviP'>Agent</p>
                <p className='footerHead'>Company</p>
                <p style={{ marginTop: '30px' }} className='naviP'>Blog</p>
                <p className='naviP'>Career</p>
                <p className='naviP'>Privacy</p>
                <p className='naviP'>Contracts</p>
                <p className='footerHead'>Support</p>
                <p style={{ marginTop: '30px' }} className='naviP'>FAQs</p>
                <p className='naviP'>Help</p>
                <p className='naviP'>Support</p>
                <p className='naviP'>Socials</p>
                <p className='footerHead'>Legal</p>
                <p style={{ marginTop: '30px' }} className='naviP'>Terms of service</p>
                <p className='naviP'>Privacy policy</p>
                <p className='naviP'>Cookie information</p>
                <p className='naviP'>Socials</p>
                <p className='logo2'><img src={logo} alt="" />Haven</p>
                <p className='copyRight'>Copyright © 2022 FullStack_Dev Rejoice . All rights reserved.</p>
                <div className='footerSocial'>
                    <img src={twitter} alt="" />
                    <img src={facebook} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer