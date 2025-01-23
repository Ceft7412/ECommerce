import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
export default function GoogleLogo({...props}) {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <G clipPath="url(#clip0)">
        <Path
          d="M23.988 12.224c0-.815-.067-1.635-.211-2.438H12.24v4.621h6.613a5.552 5.552 0 01-2.422 3.647v3.02h3.92c2.296-2.119 3.637-5.238 3.637-8.85z"
          fill="#4285F4"
        />
        <Path
          d="M12.24 24c3.28 0 6.034-1.08 8.044-2.925l-3.92-3.02c-1.082.73-2.48 1.16-4.124 1.16-3.168 0-5.853-2.14-6.813-5.02H1.362v3.12C3.41 21.42 7.62 24 12.24 24z"
          fill="#34A853"
        />
        <Path
          d="M5.427 14.3a7.055 7.055 0 010-4.596V6.584H1.362a11.996 11.996 0 000 10.832l4.065-3.116z"
          fill="#FBBC05"
        />
        <Path
          d="M12.24 4.75a6.52 6.52 0 014.603 1.8l3.427-3.426A11.796 11.796 0 0012.24 0C7.62 0 3.41 2.58 1.362 6.584l4.065 3.12c.96-2.88 3.645-5.02 6.813-5.02z"
          fill="#EA4335"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Path fill="#fff" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
