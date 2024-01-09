import * as SC from './DownloadStyles'

import {ReactComponent as AppStoreIcon} from '../../assets/icons/app-store.svg'
import {ReactComponent as GooglePlayIcon} from '../../assets/icons/google-play.svg'
import semiCircle from '../../assets/patterns/semi-circles.svg'
import whiteCircle from '../../assets/patterns/white-circles.svg'

const Download:React.FC = () => {
    return ( <SC.DownloadSection id="download" bg={semiCircle} secBg={whiteCircle}>
        <SC.DownloadTitle>Sign up and Scoot off today</SC.DownloadTitle>
        <SC.BtnCon>
            <button>
                <AppStoreIcon/>
            </button>
            <button>
                <GooglePlayIcon/>
            </button>
        </SC.BtnCon>
    </SC.DownloadSection> );
}
 
export default Download;