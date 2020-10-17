//i18n => {"footer.footer.Text.1":"yinsure.finance","footer.footer.Text.2":"Products","footer.footer.Text.3":"yearn.finance","footer.footer.Text.4":"ygov.finance","footer.footer.Text.5":"yinsure.finance","footer.footer.Text.6":"yborrow.finance","footer.footer.Text.7":"docs.yearn.finance","footer.footer.Text.8":"Community","footer.footer.Text.9":"ycosystem.info","footer.footer.Text.10":"learnyearn.finance","footer.footer.Text.11":"stats.finance","footer.footer.Text.12":"yieldfarming.info","footer.footer.Text.13":"yearn.snapshot.page","footer.footer.Text.14":"Socials","footer.footer.Text.15":"Twitter","footer.footer.Text.16":"Medium","footer.footer.Text.17":"Discord","footer.footer.Text.18":"Telegram","footer.footer.Text.19":"Github"}
import i18next from "i18next";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
	Typography,
	Select,
	MenuItem,
	FormControl
} from '@material-ui/core';
import { colors } from '../../theme';

import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import HowToVoteIcon from '@material-ui/icons/HowToVote';
import SecurityIcon from '@material-ui/icons/Security';
import DescriptionIcon from '@material-ui/icons/Description';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

import ForumIcon from '@material-ui/icons/Forum';
import BarChartIcon from '@material-ui/icons/BarChart';
import BuildIcon from '@material-ui/icons/Build';

import Store from "../../stores";
const store = Store.store;

const logoImgFooter = require('../../assets/logo/ARIES FINANCIAL ROUND LOGO(Gold).png');

const styles = theme => ({
	footer: {
		padding: '24px',
		display: 'flex',
		justifyContent: 'space-evenly',
		width: '100%',
		background: colors.white,
		borderRadius: '50px 50px 0px 0px',
		border: '1px solid '+colors.borderBlue,
		borderBottom: 'none',
		marginTop: '48px',
		flexWrap: 'wrap',
		[theme.breakpoints.down('xs')]: {
			justifyContent: 'flex-start',
		}
	},
	heading: {
		marginBottom: '12px',
		paddingBottom: '9px',
		borderBottom: "3px solid "+colors.borderBlue,
		width: 'fit-content',
		marginLeft: '30px'
	},
	link: {
		paddingBottom: '12px',
		cursor: 'pointer',
		display: 'flex',
		alignItems: 'center',
		'&:hover': {
			textDecoration: 'underline'
		}
	},
	icon: {
		fill: colors.borderBlue,
		marginRight: '6px'
	},
	yearnIcon: {
		minHeight: '100%',
		display: 'flex',
		alignItems: 'center'
	},
	builtWith:{
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			display: 'none',
		}
	},
	builtWithLink: {
		paddingTop: '12px'
	},
	builtHeading: {
		marginBottom: '12px',
		paddingBottom: '9px',
		borderBottom: "3px solid "+colors.borderBlue,
		width: 'fit-content',
	},
	products: {
		padding: '0px 24px',
		[theme.breakpoints.down('xs')]: {
			paddingBottom: '24px'
		}
	},
	community: {
		padding: '0px 24px',
		[theme.breakpoints.down('xs')]: {
			paddingBottom: '24px'
		}
	},
	socials: {
		padding: '0px 24px'
	}
});


class Footer extends Component {

	constructor(props) {
		super();
	}

	render() {
		const { classes, t, location } = this.props;

		return (
			<div className={classes.footer}>
				<div className={ classes.builtWith }>
					<Typography className={ classes.builtHeading } variant={ 'h6'} id="footer.footer.Text.1" >{i18next.t('footer.footer.Text.1')}</Typography>
					<img
						alt=""
						src={ logoImgFooter }
						height={ '120px' }
						width={ '120px' }
					/>
				</div>
				<div className={ classes.products }>
					<Typography className={ classes.heading } variant={ 'h6'} id="footer.footer.Text.2" >{i18next.t('footer.footer.Text.2')}</Typography>
					<div  className={ classes.link } onClick={()=> window.open("https://yearn.finance", "_blank")} >
						<AttachMoneyIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.3" >{i18next.t('footer.footer.Text.3')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://ygov.finance", "_blank")} >
						<HowToVoteIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.4" >{i18next.t('footer.footer.Text.4')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://yinsure.finance", "_blank")} >
						<SecurityIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.5" >{i18next.t('footer.footer.Text.5')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://yborrow.finance", "_blank")} >
						<MonetizationOnIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.6" >{i18next.t('footer.footer.Text.6')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://docs.yearn.finance", "_blank")} >
						<DescriptionIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.7" >{i18next.t('footer.footer.Text.7')}</Typography>
					</div>
				</div>
				<div className={ classes.community }>
					<Typography className={ classes.heading } variant={ 'h6'} id="footer.footer.Text.8" >{i18next.t('footer.footer.Text.8')}</Typography>
					<div  className={ classes.link } onClick={()=> window.open("https://ycosystem.info", "_blank")} >
						<DescriptionIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.9" >{i18next.t('footer.footer.Text.9')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://www.learnyearn.finance", "_blank")}>
						<DescriptionIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.10" >{i18next.t('footer.footer.Text.10')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://stats.finance/yearn", "_blank")} >
						<BarChartIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.11" >{i18next.t('footer.footer.Text.11')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://yieldfarming.info", "_blank")} >
						<BarChartIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.12" >{i18next.t('footer.footer.Text.12')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://feel-the-yearn.app", "_blank")} >
						<BarChartIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'} >feel-the-yearn.app</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://yearn.snapshot.page", "_blank")} >
						<ForumIcon height='15px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.13" >{i18next.t('footer.footer.Text.13')}</Typography>
					</div>
				</div>
				<div className={ classes.socials }>
					<Typography className={ classes.heading } variant={ 'h6'} id="footer.footer.Text.14" >{i18next.t('footer.footer.Text.14')}</Typography>
					<div  className={ classes.link } onClick={()=> window.open("https://twitter.com/iearnfinance", "_blank")} >
						<img alt="" src={ require('../../assets/twitter.svg') } height='24px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.15" >{i18next.t('footer.footer.Text.15')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://medium.com/iearn", "_blank")} >
						<img alt="" src={ require('../../assets/medium.svg') } height='24px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.16" >{i18next.t('footer.footer.Text.16')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://discord.gg/GcjxhWR", "_blank")} >
						<img alt="" src={ require('../../assets/discord.svg') } height='24px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.17" >{i18next.t('footer.footer.Text.17')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://t.me/yearnfinance", "_blank")} >
						<img alt="" src={ require('../../assets/telegram.svg') } height='24px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.18" >{i18next.t('footer.footer.Text.18')}</Typography>
					</div>
					<div  className={ classes.link } onClick={()=> window.open("https://github.com/iearn-finance", "_blank")} >
						<img alt="" src={ require('../../assets/github.svg') } height='24px' className={ classes.icon } />
						<Typography variant={ 'h4'}  id="footer.footer.Text.19" >{i18next.t('footer.footer.Text.19')}</Typography>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(withStyles(styles)(Footer));
