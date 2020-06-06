import React from 'react'
/* -------------------------------------------------------------------------- */

type LogoPlatformReactProps = {
  color?: string
  width?: number
  height?: number
}

export default function LogoPlatformReact(props: LogoPlatformReactProps) {
  const { color, width, height } = props
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 363.127 64">
      <path
        id="LogoPlatformReact"
        data-name="LogoPlatformReact"
        d="M38.641,57.938c-.657-.571-1.314-1.156-1.942-1.771-.5.486-1,.943-1.5,1.386-6.313,5.528-12.8,7.814-16.656,5.585C14.8,60.98,13.628,54.7,15.128,46.767c.171-.871.356-1.714.571-2.571-.658-.185-1.3-.4-1.943-.614C5.828,40.867,0,36.4,0,31.939c0-4.314,5.471-8.485,13.1-11.128.842-.3,1.742-.586,2.657-.843-.2-.8-.372-1.585-.528-2.385-1.571-8.057-.457-14.5,3.285-16.671,3.9-2.272,10.414.157,16.914,5.928.4.357.8.728,1.185,1.1.572-.557,1.172-1.114,1.786-1.642C44.6.9,50.726-1.345,54.482.813c3.9,2.257,5.057,9.1,3.3,17.613-.114.528-.229,1.057-.357,1.586q1.157.343,2.314.728c7.772,2.671,13.4,6.872,13.4,11.2,0,4.529-5.972,8.942-14.214,11.671-.443.142-.886.285-1.343.414q.235.985.428,1.929c1.628,8.228.372,14.985-3.486,17.213a6.6,6.6,0,0,1-3.35.833C47.64,64,43.159,61.823,38.641,57.938Zm6.228-11.614a70.5,70.5,0,0,1-6.028,7.657c.615.571,1.215,1.129,1.814,1.642,5.228,4.486,10.071,6.2,12.343,4.885a6.35,6.35,0,0,0,2.357-4.471A26.033,26.033,0,0,0,55,46.567c-.114-.572-.243-1.157-.386-1.742A70.4,70.4,0,0,1,44.869,46.324Zm-26.712.986c-1.286,6.785-.343,11.828,1.928,13.142a6.325,6.325,0,0,0,5.043-.185,26.161,26.161,0,0,0,8.057-5.043c.457-.4.914-.829,1.372-1.272a75.254,75.254,0,0,1-6.171-7.628,71.31,71.31,0,0,1-9.7-1.4C18.485,45.71,18.313,46.51,18.157,47.31Zm18.527,4.442a61.61,61.61,0,0,0,4.228-5.2c-1.428.072-2.871.1-4.342.1-1.428,0-2.843-.029-4.215-.086C33.77,48.439,35.227,50.181,36.684,51.753Zm-6.672-31.1c-1.229,1.814-2.4,3.657-3.485,5.557s-2.114,3.829-3.057,5.8c.957,1.971,1.971,3.9,3.071,5.8s2.272,3.757,3.514,5.571c2.1.129,4.271.2,6.514.2s4.457-.071,6.585-.229c1.214-1.829,2.371-3.671,3.457-5.571s2.129-3.857,3.085-5.828c-.971-1.957-2-3.885-3.1-5.771s-2.257-3.729-3.471-5.529C41,20.5,38.8,20.411,36.57,20.411S32.155,20.5,30.012,20.654Zm-10.5,21.327a64.7,64.7,0,0,0,6.628,1.072c-.786-1.214-1.528-2.457-2.257-3.7-.714-1.229-1.385-2.471-2.042-3.729A66.941,66.941,0,0,0,19.513,41.981Zm29.756-2.657c-.715,1.229-1.443,2.457-2.214,3.657a62.691,62.691,0,0,0,6.714-1.142,66.366,66.366,0,0,0-2.415-6.329C50.683,36.8,50,38.067,49.269,39.325ZM14.1,23.711C7.585,25.982,3.072,29.326,3.072,31.939a6.407,6.407,0,0,0,2.685,4.271,29.134,29.134,0,0,0,9,4.457c.586.2,1.171.386,1.771.557a78.138,78.138,0,0,1,3.542-9.213,76.079,76.079,0,0,1-3.5-9.085C15.742,23.169,14.914,23.425,14.1,23.711Zm39,8.228a72.59,72.59,0,0,1,3.642,9.114c.415-.114.814-.243,1.214-.372,7.129-2.357,12.114-5.972,12.114-8.771,0-2.6-4.671-6-11.328-8.285-.685-.229-1.4-.457-2.142-.671A72.291,72.291,0,0,1,53.1,31.939Zm-3.843-7.286c.715,1.229,1.4,2.486,2.072,3.743a63.264,63.264,0,0,0,2.3-6.2,65.814,65.814,0,0,0-6.557-1.142Q48.2,22.833,49.254,24.654Zm-29.7-2.485c.628,2.014,1.386,4.1,2.286,6.228.643-1.257,1.328-2.5,2.028-3.714s1.443-2.443,2.2-3.628C23.8,21.34,21.614,21.712,19.556,22.169ZM40.412,8.612c-.571.5-1.114,1-1.671,1.528a72.222,72.222,0,0,1,6.086,7.585A73.166,73.166,0,0,1,54.44,19.24c.129-.472.229-.943.328-1.428,1.514-7.358.586-12.956-1.829-14.342a3.51,3.51,0,0,0-1.766-.41C48.577,3.06,44.606,4.959,40.412,8.612ZM20.028,3.569c-2.257,1.3-3.143,6.514-1.8,13.428.157.743.314,1.486.5,2.214a75.347,75.347,0,0,1,9.6-1.486,72.5,72.5,0,0,1,6.128-7.585c-.372-.343-.729-.686-1.086-1-4.443-3.934-8.707-6.007-11.482-6.007A3.661,3.661,0,0,0,20.028,3.569Zm20.8,13.871A62.93,62.93,0,0,0,36.6,12.326c-1.429,1.557-2.872,3.271-4.271,5.114q2.121-.1,4.249-.1T40.827,17.44ZM91.678,54.382v-32.8h3.845V24.7a9.6,9.6,0,0,1,2.593-2.482,8.343,8.343,0,0,1,4.7-1.319,8.842,8.842,0,0,1,6.79,3.065q2.79,3.064,2.79,8.756,0,7.69-4.021,10.986a9.085,9.085,0,0,1-5.932,2.087,8.047,8.047,0,0,1-4.46-1.165,10.259,10.259,0,0,1-2.352-2.264V54.382Zm4.614-25.906a16.261,16.261,0,0,0-.814,5.581,11.816,11.816,0,0,0,.814,4.636,5.973,5.973,0,0,0,10.228,1.329q1.835-2.318,1.835-6.932a12.948,12.948,0,0,0-.813-4.835,5.612,5.612,0,0,0-5.625-3.889Q97.807,24.368,96.292,28.477Zm82,14.095q-2.857-3.285-2.857-8.822,0-5.933,3.01-9.448a10.1,10.1,0,0,1,8.086-3.515,10.656,10.656,0,0,1,7.69,3.032q3.143,3.032,3.142,8.921a15.3,15.3,0,0,1-2.768,9.4q-2.769,3.714-8.591,3.713A9.7,9.7,0,0,1,178.294,42.572ZM181.15,27a12.831,12.831,0,0,0-1.648,6.68,11.162,11.162,0,0,0,1.648,6.262,5.8,5.8,0,0,0,5.229,2.5q3.934,0,5.395-2.977a14.839,14.839,0,0,0,1.461-6.625,11.8,11.8,0,0,0-1.054-5.361,5.934,5.934,0,0,0-5.757-3.252A5.676,5.676,0,0,0,181.15,27ZM283.762,42.638q-3.054-3.2-3.054-8.953a13.526,13.526,0,0,1,3.076-9.207,10.148,10.148,0,0,1,8.042-3.537,10.733,10.733,0,0,1,4.856,1.175,8.958,8.958,0,0,1,3.581,3.043,10.5,10.5,0,0,1,1.582,4.153A27.125,27.125,0,0,1,302.2,34.5H284.949a10.06,10.06,0,0,0,1.692,5.746,5.663,5.663,0,0,0,4.9,2.165,6.335,6.335,0,0,0,4.944-2.043,6.89,6.89,0,0,0,1.494-2.747h3.89a8.193,8.193,0,0,1-1.022,2.889,10.277,10.277,0,0,1-1.944,2.6,9.223,9.223,0,0,1-4.46,2.373,13.527,13.527,0,0,1-3.23.352A9.911,9.911,0,0,1,283.762,42.638Zm3.253-16.281a7.422,7.422,0,0,0-1.956,5h13.073a10.254,10.254,0,0,0-1.12-4.109,5.743,5.743,0,0,0-5.427-2.856A6.015,6.015,0,0,0,287.014,26.357ZM308.031,43.8a6.6,6.6,0,0,1-2.076-4.976A6.41,6.41,0,0,1,308,33.75a9.718,9.718,0,0,1,5.361-2.219l6.306-.791a2.147,2.147,0,0,0,1.823-1.142,3.469,3.469,0,0,0,.264-1.517,3.212,3.212,0,0,0-1.439-2.933,7.716,7.716,0,0,0-4.119-.912q-3.1,0-4.395,1.67a5.5,5.5,0,0,0-.945,2.747h-3.692q.111-4.351,2.824-6.053a11.586,11.586,0,0,1,6.295-1.7,12.806,12.806,0,0,1,6.745,1.582A5.364,5.364,0,0,1,325.6,27.4V40.957a1.726,1.726,0,0,0,.253.988,1.217,1.217,0,0,0,1.066.374q.263,0,.593-.032c.22-.023.454-.055.7-.1V45.11a11.1,11.1,0,0,1-1.406.329,10.243,10.243,0,0,1-1.318.067,3.253,3.253,0,0,1-2.966-1.451,5.585,5.585,0,0,1-.681-2.175,10.066,10.066,0,0,1-3.471,2.747,10.737,10.737,0,0,1-4.988,1.165A7.416,7.416,0,0,1,308.031,43.8Zm11.744-10.008a15.924,15.924,0,0,1-2.241.439l-2.395.308a9.142,9.142,0,0,0-3.23.9,3.51,3.51,0,0,0-1.824,3.3,3.257,3.257,0,0,0,1.253,2.7,4.646,4.646,0,0,0,2.966.989,9.02,9.02,0,0,0,4.043-.967,5.44,5.44,0,0,0,3.3-5.251V33.025A6.766,6.766,0,0,1,319.775,33.794ZM127.987,43.8a6.6,6.6,0,0,1-2.076-4.976,6.413,6.413,0,0,1,2.043-5.076,9.721,9.721,0,0,1,5.361-2.219l6.306-.791a2.149,2.149,0,0,0,1.824-1.142,3.483,3.483,0,0,0,.263-1.517,3.212,3.212,0,0,0-1.439-2.933,7.716,7.716,0,0,0-4.119-.912q-3.1,0-4.395,1.67a5.5,5.5,0,0,0-.945,2.747H127.12q.109-4.351,2.823-6.053a11.586,11.586,0,0,1,6.295-1.7,12.81,12.81,0,0,1,6.746,1.582,5.365,5.365,0,0,1,2.57,4.921V40.957a1.733,1.733,0,0,0,.253.988,1.218,1.218,0,0,0,1.066.374q.263,0,.593-.032c.22-.023.455-.055.7-.1V45.11a11.063,11.063,0,0,1-1.406.329,10.234,10.234,0,0,1-1.318.067,3.254,3.254,0,0,1-2.966-1.451,5.6,5.6,0,0,1-.681-2.175,10.066,10.066,0,0,1-3.471,2.747,10.737,10.737,0,0,1-4.988,1.165A7.418,7.418,0,0,1,127.987,43.8Zm11.744-10.008a15.924,15.924,0,0,1-2.241.439l-2.395.308a9.147,9.147,0,0,0-3.23.9,3.509,3.509,0,0,0-1.823,3.3,3.256,3.256,0,0,0,1.252,2.7,4.648,4.648,0,0,0,2.966.989,9.02,9.02,0,0,0,4.043-.967,5.44,5.44,0,0,0,3.3-5.251V33.025A6.754,6.754,0,0,1,139.731,33.794Zm193.491,8.514a12.91,12.91,0,0,1-2.746-8.427q0-6.2,3.01-9.645a9.726,9.726,0,0,1,7.669-3.45,10.261,10.261,0,0,1,6.471,1.933q2.493,1.933,3,6.658H346.78a7.1,7.1,0,0,0-1.6-3.615,5.068,5.068,0,0,0-4.021-1.439,5.556,5.556,0,0,0-5.405,3.692,14.666,14.666,0,0,0-1.055,5.91,11.131,11.131,0,0,0,1.494,5.955,5.793,5.793,0,0,0,8.6.912,8.271,8.271,0,0,0,1.989-4.12h3.845q-.659,4.68-3.3,6.844a10.283,10.283,0,0,1-6.746,2.165A9,9,0,0,1,333.222,42.308Zm23.137,1.648a6.3,6.3,0,0,1-.988-3.68V24.7h-3.186V21.468h3.186V14.9h4v6.57h3.758V24.7H359.37V40.056a1.661,1.661,0,0,0,.835,1.648,3.55,3.55,0,0,0,1.538.241q.285,0,.616-.011c.22-.007.475-.025.769-.055V45a8.863,8.863,0,0,1-1.417.285,13.486,13.486,0,0,1-1.593.088Q357.348,45.374,356.359,43.956Zm-202.543,0a6.293,6.293,0,0,1-.989-3.68V24.7h-3.186V21.468h3.186V14.9h4v6.57h3.758V24.7h-3.758V40.056a1.663,1.663,0,0,0,.835,1.648,3.553,3.553,0,0,0,1.538.241q.286,0,.616-.011t.769-.055V45a8.843,8.843,0,0,1-1.417.285,13.486,13.486,0,0,1-1.593.088Q154.805,45.374,153.816,43.956ZM267.151,45V21.468h3.758v4.064a8.976,8.976,0,0,1,2.263-2.889,5.865,5.865,0,0,1,4.153-1.7c.073,0,.2.007.373.022s.476.044.9.088v4.174a6,6,0,0,0-.648-.087q-.3-.023-.648-.023a5.642,5.642,0,0,0-4.593,1.923,6.709,6.709,0,0,0-1.6,4.427V45Zm-11.667,0V40.21h4.592V45Zm-10.876,0V28.652a3.807,3.807,0,0,0-1.176-3.23,4.65,4.65,0,0,0-2.867-.878,5.689,5.689,0,0,0-4.01,1.56q-1.681,1.561-1.681,5.207V45h-4.021V29.642a7.983,7.983,0,0,0-.571-3.494,3.485,3.485,0,0,0-3.362-1.648,5.8,5.8,0,0,0-4.076,1.735q-1.835,1.736-1.834,6.285V45h-3.955V21.468h3.911v3.339a13.181,13.181,0,0,1,2.549-2.526,7.665,7.665,0,0,1,4.439-1.34,6.983,6.983,0,0,1,4.526,1.384,7.232,7.232,0,0,1,1.758,2.329,8.548,8.548,0,0,1,3.1-2.8,8.64,8.64,0,0,1,4-.912q4.745,0,6.46,3.427a11.214,11.214,0,0,1,.923,4.966V45Zm-42.43,0V21.468h3.757v4.064a8.983,8.983,0,0,1,2.263-2.889,5.867,5.867,0,0,1,4.154-1.7c.073,0,.2.007.373.022s.476.044.9.088v4.174a6.056,6.056,0,0,0-.648-.087q-.3-.023-.649-.023a5.642,5.642,0,0,0-4.592,1.923,6.709,6.709,0,0,0-1.6,4.427V45Zm-36.651,0V24.7h-3.273V21.578h3.273V17.886a7.057,7.057,0,0,1,.857-3.6q1.385-2.021,5.34-2.021.374,0,.77.022c.264.015.563.037.9.067v3.6q-.616-.045-.89-.055c-.184-.008-.355-.012-.517-.012q-1.8,0-2.154.934a18.5,18.5,0,0,0-.351,4.757h3.911V24.7h-3.955V45Zm-48.406,0V12.722h3.955V45ZM30.027,32a6.543,6.543,0,1,1,6.543,6.542A6.542,6.542,0,0,1,30.027,32Z"
        transform="translate(0 0)"
        fill={color}
      />
    </svg>
  )
}

LogoPlatformReact.defaultProps = {
  color: '#38B2AC',
  width: 256,
  height: 45,
}
