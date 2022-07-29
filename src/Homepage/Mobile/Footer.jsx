import './Footer.css'
import logo from '../../img/logo_blue.svg'
import twitter from '../../img/Vector (2).svg'
import facebook from '../../img/Vector (1).svg'
import instagram from '../../img/Vector.svg'

const Footer = () => {
    return (
        <div>
            <div className='footerMain'>
                <div className='footDiv' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div className='inFootDiv' style={{ width: '300px' }}>
                        <p className='logo'><img src={logo} alt="" />Haven</p>
                        <p style={{ marginTop: '30px' }} className='naviP'>For Sale</p>
                        <p className='naviP'>For Rent</p>
                        <p className='naviP'>Short Let</p>
                        <p className='naviP'>Agent</p>
                    </div>
                    <div style={{ width: '300px' }}>
                        <p className='footerHead'>Company</p>
                        <p style={{ marginTop: '30px' }} className='naviP'>Blog</p>
                        <p className='naviP'>Career</p>
                        <p className='naviP'>Privacy</p>
                        <p className='naviP'>Contracts</p>
                    </div>
                    <div style={{ width: '300px' }}>
                        <p className='footerHead'>Support</p>
                        <p style={{ marginTop: '30px' }} className='naviP'>FAQs</p>
                        <p className='naviP'>Help</p>
                        <p className='naviP'>Support</p>
                        <p className='naviP'>Socials</p>
                    </div>
                    <div style={{ width: '300px' }}>
                        <p className='footerHead'>Legal</p>
                        <p style={{ marginTop: '30px' }} className='naviP'>Terms of service</p>
                        <p className='naviP'>Privacy policy</p>
                        <p className='naviP'>Cookie information</p>
                        <p className='naviP'>Socials</p>
                    </div>
                </div>
                <center>
                    <p className='logo2'><img src={logo} alt="" />Haven</p>
                    <p className='copyRight'>Copyright © 2022 PlanetScale and Hashnode . All rights reserved.</p>
                </center>
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