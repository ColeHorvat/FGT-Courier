import { CourierClient } from "@trycourier/courier";
import dotenv from "dotenv";

dotenv.config()

const AUTH_KEY = process.env.AUTH_KEY
const TEST_EMAIL = process.env.TEST_EMAIL
const TEST_PHONE = process.env.TEST_PHONE


const courier = CourierClient({ authorizationToken: AUTH_KEY });
const TEST_OLD_RES =
	[
		[
			{
				title: "The Captain",
				url: "https://store.epicgames.com/en-US/p/the-captain",
				image: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheCaptain_Sysiacgames_S1_2560x1440-b58c40c02e67f0e2317a62c4b51d5c9f"
			},
			{
				title: "Spirit of the North",
				url: "https://store.epicgames.com/en-US/p/c9e146fa85d74402a2989001508ecd16",
				image: "https://cdn1.epicgames.com/spt-assets/177dc72233934ac487abd83b01587086/spirit-of-the-north-offer-mznb7.jpg"
			}
		],
		[
			{
				title: "Sid Meier's Civilization VI",
				url: "https://store.steampowered.com/app/289070/Sid_Meiers_Civilization_VI/?curator_clanid=4777282&utm_source=SteamDB",
				image: "https://cdn.cloudflare.steamstatic.com/steam/apps/289070/capsule_sm_120.jpg?t=1663263035"
			}
		]
	]

const TEST_NEW_RES =

	[
		[
			{
				title: 'The Captain',
				url: 'https://store.epicgames.com/en-US/p/the-captain',
				image: 'https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_TheCaptain_Sysiacgames_S1_2560x1440-b58c40c02e67f0e2317a62c4b51d5c9f'
			},
			{
				title: 'Spirit of the North',
				url: 'https://store.epicgames.com/en-US/p/c9e146fa85d74402a2989001508ecd16',
				image: 'https://cdn1.epicgames.com/spt-assets/177dc72233934ac487abd83b01587086/spirit-of-the-north-offer-mznb7.jpg'
			}
		],
		[
			{
				title: 'Need for Speed™ Payback - Fortune Valley Map Shortcuts',
				url: 'https://store.steampowered.com/app/1262591/Need_for_Speed_Payback__Fortune_Valley_Map_Shortcuts/?snr=1_7_7_2300_150_1',
				image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1262591/capsule_sm_120.jpg?t=1663269167'
			}
		]
	]



let res = compareRes(TEST_OLD_RES, TEST_NEW_RES);
console.log(res)

/* if (res[0] || res[1]) {
	const { requestId } = await courier.send({
		message: {
			to: {
				email: TEST_EMAIL,
				phone_number: TEST_PHONE
			},
			template: "SET3Q2V4WNMNPNG9C5FQ2P7GT3K8",
			data: {
				recipientName: "Cole",
				steamGames: res[1],
				epicGames: res[0],
				cancelLink: "Cancel Link Placeholder"
			},
		},
	});
} */

/* const { requestId } = await courier.send({
	message: {
		to: {
			email: TEST_EMAIL,
			phone_number: TEST_PHONE
		},
		template: "SET3Q2V4WNMNPNG9C5FQ2P7GT3K8",
		data: {
			recipientName: "Cole",
			steamGames: TEST_RES[1],
			epicGames: TEST_RES[0],
			cancelLink: "Cancel Link Placeholder"
		},
	},
});
 */
function compareRes(oldRes, newRes) {
	let result = []
	for (let s = 0; s < newRes.length; s++) {
		for (let g = 0; g < newRes[s].length; g++) {
			if (oldRes[s].some(compare => compare.title === newRes[s][g].title)) {
				newRes[s][g] = null
			}
		}
		let newStore = newRes[s].filter(x => x !== null)
		result.push(newStore)
	}


	return result
}
