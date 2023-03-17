import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated, PanResponder } from 'react-native';


const DOMAIN_DATA = [
  {
    name: 'Finance',
    subDomains: ['Investing', 'Personal Finance', 'Banking']
  },
  {
    name: 'Technology',
    subDomains: ['Web Development', 'Mobile Development', 'Data Science']
  },
  {
    name: 'Marketing',
    subDomains: ['Content Marketing', 'Social Media Marketing', 'Email Marketing']
  },
];

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const Cluster = ({ domain, subDomains, onPress, isSubDomain }) => {
  const [position, setPosition] = useState(
    new Animated.ValueXY({
      x: getRandomInt(8, 10),
      y: getRandomInt(16, 20),
    })
  );

  useEffect(() => {
    const randomizeAnimation = () => {
      Animated.sequence([
        Animated.timing(position, {
          toValue: {
            x: position.x._value + getRandomInt(-10, 10),
            y: position.y._value + getRandomInt(-10, 10),
          },
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(position, {
          toValue: { x: position.x._value, y: position.y._value},
          duration: 3000,
          useNativeDriver: false,
        }),
      ]).start(() => {
        randomizeAnimation();
      });
    };

    randomizeAnimation();
  }, [position]);

  const clusterStyle = {
    transform: [
      { translateX: position.x },
      { translateY: position.y },
      { scale: isSubDomain ? 0.8 : 1.0 },
    ],
  };

  const clusterTextStyle = {
    fontSize: isSubDomain ? 12 : 18,
    color: isSubDomain ? 'white' : 'white',
  };

  const clusterColor = isSubDomain ? 'slategrey' : 'midnightblue';

  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View style={[styles.cluster, clusterStyle, { backgroundColor: clusterColor }]}>
        <Text style={[styles.clusterText, clusterTextStyle]}>{domain}</Text>
      </Animated.View>
    </TouchableOpacity>
  );
};

const DomainCluster = ({ domain, subDomains, onPress }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
  [
    null,
    {
      dx: pan.x,
      dy: pan.y,
    },
  ],
  { useNativeDriver: false }
),
    })
  ).current;

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Animated.View
        style={[
          styles.container,
          { transform: [{ translateX: pan.x }, { translateY: pan.y }] },
        ]}
        {...panResponder.panHandlers}
      >

     
      <Cluster domain={domain} onPress={toggleExpansion} />
      {isExpanded && (
        <View style={styles.subDomainContainer}>
          {subDomains.map((subDomain) => (
            <Cluster
            domain={subDomain}
            key={subDomain}
            onPress={() => console.log(`Selected ${subDomain}`)}
            isSubDomain
            />
            ))}
        </View>
      )}
      </Animated.View>
  );
};

const DomainClusterGraph = () => {


  return (
    <View style={styles.container}>


      {DOMAIN_DATA.map((domainData) => (
        <DomainCluster domain={domainData.name} subDomains={domainData.subDomains} key={domainData.name} />
        ))}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    flex: 1,
    alignItems: 'center',
  },
  cluster: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 100,
    margin: 10,
    maxWidth: 200
  },
  clusterText: {
    textAlign: 'center',
    lineHeight: 50,
  },
  subDomainContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
});

export default DomainClusterGraph


// import React, { useState, useEffect, useRef } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';

// const DOMAIN_DATA = [
//   {
//     name: 'Finance',
//     subDomains: ['Investing', 'Personal Finance', 'Banking']
//   },
//   {
//     name: 'Technology',
//     subDomains: ['Web Development', 'Mobile Development', 'Data Science']
//   },
//   {
//     name: 'Marketing',
//     subDomains: ['Content Marketing', 'Social Media Marketing', 'Email Marketing']
//   }
// ];

// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };

// const Cluster = ({ domain, subDomains, onPress }) => {
//     // const [animation] = useState(new Animated.Value(0));
//     // const position = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
//     const [position, setPosition] = useState(new Animated.ValueXY({
//         x: getRandomInt(0, 15),
//         y: getRandomInt(0, 25),
//       }));
    
//       useEffect(() => {
//         const randomizeAnimation = () => {
//           Animated.sequence([
//             Animated.timing(position, {
//               toValue: { x: position.x._value + getRandomInt(-10, 10), y: position.y._value + getRandomInt(-10, 10) },
//               duration: 3000,
//               useNativeDriver: false,
//             }),
//             Animated.timing(position, {
//               toValue: { x: position.x._value, y: position.y._value },
//               duration: 3000,
//               useNativeDriver: false,
//             })
//           ]).start(() => {
//             randomizeAnimation()
//           })
//         };
        
    
//         randomizeAnimation()
//       }, [position]);
    
//       const bubbleStyle = {
//         transform: [
//           { translateX: position.x },
//           { translateY: position.y },
//         ],
//       }
    

// //   const interpolated = animation.interpolate({
// //     inputRange: [0, 1],
// //     outputRange: ['0deg', '360deg'],
// //   });

// //   const animatedStyle = {
// //     transform: [{ rotate: interpolated }, { translateY: animation }],
// //   };
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <Animated.View style={[styles.cluster, bubbleStyle]}>
//         <Text style={styles.clusterText}>{domain}</Text>
//       </Animated.View>
//     </TouchableOpacity>
//   );
// };

// const DomainCluster = ({ domain, subDomains, onPress }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const toggleExpansion = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <View style={styles.container}>
//       <Cluster domain={domain} onPress={toggleExpansion} />
//       {isExpanded && (
//         <View style={styles.subDomainContainer}>
//           {subDomains.map((subDomain) => (
//             <Cluster domain={subDomain} key={subDomain} onPress={() => console.log(`Selected ${subDomain}`)} />
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// const DomainClusterGraph = () => {
//   return (
//     <View style={styles.container}>
//       {DOMAIN_DATA.map((domainData) => (
//         <DomainCluster domain={domainData.name} subDomains={domainData.subDomains} key={domainData.name} />
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginVertical: 10,
//         flex: 1,
//         alignItems: 'center',
//     },
//     cluster: {
//         paddingHorizontal: 20,
//         paddingVertical: 10,
//         borderRadius: "100%",
//         backgroundColor: 'slateblue',
//         margin: 10
//     },
//     clusterText: {
//         color: 'white',
//         textAlign: 'center',
//         lineHeight: 50
//     },
//     subDomainContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         marginTop: 10
//       }
// });

// export default DomainClusterGraph;
