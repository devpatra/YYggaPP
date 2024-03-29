import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const LandingPage = () => {
  return (
    <View style={styles.landingPage}>
      <View style={[styles.landingPageChild, styles.landingLayout]} />
      <Image
        style={[styles.landingPageItem, styles.landingLayout]}
        contentFit="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={[styles.sortParent, styles.report1Position]}>
        <Text style={[styles.sort, styles.sortTypo]}>Sort</Text>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </View>
      <View style={styles.shortlistedParent}>
        <Text style={[styles.shortlisted, styles.sortTypo]}>Shortlisted</Text>
        <Image
          style={styles.clipboardHeart1Icon}
          contentFit="cover"
          source={require("../assets/clipboardheart-1.png")}
        />
      </View>
      <View style={styles.vectorParent}>
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector1.png")}
        />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        />
        <Text style={[styles.contacts, styles.sortTypo]}>Contacts</Text>
      </View>
      <View style={[styles.vectorGroup, styles.vectorPosition]}>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector4.png")}
        />
        <Text style={[styles.gallery, styles.mapPosition]}>Gallery</Text>
      </View>
      <View style={[styles.vectorContainer, styles.vectorPosition]}>
        <Image
          style={[styles.vectorIcon5, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector5.png")}
        />
        <Text style={[styles.map, styles.mapPosition]}>Map</Text>
      </View>
      <Text style={[styles.epicDesigns, styles.courseTypo]}>Epic Designs</Text>
      <View style={[styles.landingPageInner, styles.landingLayout]} />
      <Text style={[styles.vastuCourse, styles.vastuCoursePosition]}>
        Vastu Course
      </Text>
      <Text style={[styles.vastuIsAn, styles.vastuIsAnTypo]}>
        Vastu is an old Indian investigation of architecture and structures that
        help make an appropriate setting
      </Text>
      <Text style={[styles.enrolled, styles.monthLayout]}>
        <Text style={[styles.text, styles.textTypo1]}>{`57
`}</Text>
        <Text style={styles.enrolled1}>enrolled</Text>
      </Text>
      <Text style={[styles.month, styles.monthLayout]}>
        <Text style={[styles.text, styles.textTypo1]}>{`6
`}</Text>
        <Text style={styles.enrolled1}>month</Text>
      </Text>
      <Text style={[styles.price, styles.monthLayout]}>
        <Text style={[styles.text, styles.textTypo1]}>{`$99
`}</Text>
        <Text style={styles.enrolled1}>Price</Text>
      </Text>
      <Image
        style={[styles.groupIcon, styles.groupLayout]}
        contentFit="cover"
        source={require("../assets/group-1.png")}
      />
      <Image
        style={[styles.arrowRightShort1Icon, styles.arrowIconLayout]}
        contentFit="cover"
        source={require("../assets/arrowrightshort-1.png")}
      />
      <Text style={[styles.details, styles.hideTypo]}>Details</Text>
      <Text style={[styles.details1, styles.hideTypo]}>Details</Text>
      <Text style={[styles.hide, styles.hidePosition]}>Hide</Text>
      <Text style={[styles.shortlist, styles.shortlistTypo]}>Shortlist</Text>
      <Text style={[styles.report, styles.hideTypo]}>Report</Text>
      <View style={[styles.lineView, styles.lineViewBorder]} />
      <View style={[styles.landingPageChild1, styles.yogaCoursePosition]} />
      <Text style={[styles.text3, styles.textTypo]}>+91 - 9824524545</Text>
      <Text style={[styles.text4, styles.textTypo]}>+91 - 9842311778</Text>
      <Image
        style={[styles.exclamationCircle1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/exclamationcircle-1.png")}
      />
      <View style={[styles.rectangleView, styles.landingLayout]} />
      <Text style={[styles.astrologyCourse, styles.courseTypo]}>
        Astrology Course
      </Text>
      <Text style={[styles.astrologyIsAn, styles.vastuIsAnTypo]}>
        Astrology is an ancient Indian science that clarifies planetary
        movements and positions for time
      </Text>
      <Text style={[styles.enrolled2, styles.enrolled2Position]}>
        <Text style={[styles.text, styles.textTypo1]}>{`43
`}</Text>
        <Text style={styles.enrolled1}>enrolled</Text>
      </Text>
      <Text style={[styles.month2, styles.month2Layout]}>
        <Text style={[styles.text, styles.textTypo1]}>{`6
`}</Text>
        <Text style={styles.enrolled1}>month</Text>
      </Text>
      <Image
        style={[styles.landingPageChild2, styles.starFill4IconPosition]}
        contentFit="cover"
        source={require("../assets/group-11.png")}
      />
      <View style={[styles.arrowRightShort1Parent, styles.arrowLayout]}>
        <Image
          style={[styles.arrowRightShort1Icon1, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrowrightshort-1.png")}
        />
        <Text style={[styles.details2, styles.hideTypo]}>Details</Text>
      </View>
      <View style={[styles.arrowRightShort1Group, styles.arrowLayout]}>
        <Image
          style={[styles.arrowRightShort1Icon1, styles.arrowIconLayout]}
          contentFit="cover"
          source={require("../assets/arrowrightshort-1.png")}
        />
        <Text style={[styles.details2, styles.hideTypo]}>Details</Text>
      </View>
      <Text style={[styles.hide1, styles.hideTypo]}>Hide</Text>
      <Text style={[styles.shortlist1, styles.hideTypo]}>Shortlist</Text>
      <Text style={[styles.report1, styles.hideTypo]}>Report</Text>
      <Image
        style={[styles.bookmarkHeart1Icon, styles.bookmarkIconLayout]}
        contentFit="cover"
        source={require("../assets/bookmarkheart-1.png")}
      />
      <Image
        style={styles.lineIcon}
        contentFit="cover"
        source={require("../assets/line-3.png")}
      />
      <View style={styles.landingPageChild3} />
      <Text style={[styles.text7, styles.textTypo]}>+91 - 9824524545</Text>
      <Text style={[styles.text8, styles.textTypo]}>+91 - 9842311778</Text>
      <Image
        style={[styles.exclamationCircle1Icon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/exclamationcircle-1.png")}
      />
      <Image
        style={[styles.starFill4Icon, styles.starFill4IconPosition]}
        contentFit="cover"
        source={require("../assets/starfill-4.png")}
      />
      <View style={[styles.epicDesignsParent, styles.groupChildLayout]}>
        <Text style={[styles.epicDesigns1, styles.courseTypo]}>
          Epic Designs
        </Text>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={[styles.epicDesigns2, styles.epicDesigns2Position]}>
          Epic Designs
        </Text>
        <Text style={[styles.passionateTeamOf, styles.vastuIsAnTypo]}>
          Passionate team of 4 designers working out of Bangalore with an
          experience of 4 years.
        </Text>
        <Text style={[styles.projects, styles.yearsPosition]}>
          <Text style={[styles.text, styles.textTypo1]}>{`57
`}</Text>
          <Text style={styles.enrolled1}>Projects</Text>
        </Text>
        <Text style={[styles.years, styles.yearsPosition]}>
          <Text style={[styles.text, styles.textTypo1]}>{`8
`}</Text>
          <Text style={styles.enrolled1}>Years</Text>
        </Text>
        <Text style={[styles.price2, styles.yearsPosition]}>
          <Text style={styles.textTypo1}>
            <Text style={styles.text12}>4</Text>
          </Text>
          <Text style={styles.price3}>
            <Text style={styles.textTypo1}>{`/5
`}</Text>
            <Text style={styles.price4}>Price</Text>
          </Text>
        </Text>
        <Image
          style={[styles.groupItem, styles.groupLayout]}
          contentFit="cover"
          source={require("../assets/group-12.png")}
        />
        <Image
          style={styles.eyeSlashFill1Icon}
          contentFit="cover"
          source={require("../assets/eyeslashfill-1.png")}
        />
        <Image
          style={[styles.arrowRightShort1Icon3, styles.epicDesigns2Position]}
          contentFit="cover"
          source={require("../assets/arrowrightshort-1.png")}
        />
        <Text style={[styles.details4, styles.hideTypo]}>Details</Text>
        <Text style={[styles.hide2, styles.hidePosition]}>Hide</Text>
        <Text style={[styles.shortlist2, styles.shortlistTypo]}>Shortlist</Text>
        <Text style={[styles.call, styles.iconPosition]}>Call</Text>
        <Text style={[styles.report2, styles.hideTypo]}>Report</Text>
        <Image
          style={[styles.bookmarkHeart1Icon1, styles.bookmarkIconLayout]}
          contentFit="cover"
          source={require("../assets/bookmarkheart-1.png")}
        />
        <View style={[styles.groupInner, styles.lineViewBorder]} />
        <Image
          style={[styles.telephone1Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/telephone-1.png")}
        />
        <Text style={[styles.text14, styles.textTypo]}>+91 - 984532853</Text>
        <Text style={[styles.text15, styles.textTypo]}>+91 - 984532854</Text>
        <Image
          style={[styles.exclamationCircle1Icon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/exclamationcircle-1.png")}
        />
      </View>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.vedicmeet, styles.vedicmeetPosition]}>
        VedicMeet
      </Text>
      <Image
        style={[styles.threeDotsVertical1Icon, styles.vedicmeetPosition]}
        contentFit="cover"
        source={require("../assets/threedotsvertical-1.png")}
      />
      <Image
        style={[styles.eyeSlash1Icon, styles.eyeIconLayout]}
        contentFit="cover"
        source={require("../assets/eyeslash-1.png")}
      />
      <Image
        style={[styles.eyeSlash2Icon, styles.eyeIconLayout]}
        contentFit="cover"
        source={require("../assets/eyeslash-1.png")}
      />
      <Text style={[styles.yogaCourse, styles.yogaCoursePosition]}>
        Yoga Course
      </Text>
      <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Image
        style={[styles.vedicLogo1Icon, styles.enrolled2Position]}
        contentFit="cover"
        source={require("../assets/vedic-logo-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  landingLayout: {
    width: 360,
    position: "absolute",
  },
  report1Position: {
    left: 305,
    position: "absolute",
  },
  sortTypo: {
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    position: "absolute",
  },
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    top: "12.13%",
    position: "absolute",
  },
  mapPosition: {
    top: 31,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    fontSize: FontSize.size_5xs,
    left: 0,
    position: "absolute",
  },
  courseTypo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.chivoBold,
    fontWeight: "700",
    textAlign: "left",
  },
  vastuCoursePosition: {
    top: 184,
    position: "absolute",
  },
  vastuIsAnTypo: {
    height: 32,
    width: 211,
    fontSize: FontSize.size_3xs,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    position: "absolute",
  },
  monthLayout: {
    height: 37,
    width: 47,
    textAlign: "center",
    top: 303,
    color: Color.colorBlack,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.chivoBold,
    fontWeight: "700",
  },
  groupLayout: {
    width: 96,
    height: 16,
    left: 33,
    position: "absolute",
  },
  arrowIconLayout: {
    height: 22,
    width: 23,
    overflow: "hidden",
  },
  hideTypo: {
    color: Color.colorSienna,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    fontSize: FontSize.size_5xs,
  },
  hidePosition: {
    left: 309,
    position: "absolute",
  },
  shortlistTypo: {
    left: 303,
    color: Color.colorSienna,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  lineViewBorder: {
    width: 0,
    borderRightWidth: 0.3,
    left: 275,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
  },
  yogaCoursePosition: {
    top: 777,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    position: "absolute",
  },
  iconLayout: {
    width: 16,
    overflow: "hidden",
  },
  enrolled2Position: {
    left: 28,
    position: "absolute",
  },
  month2Layout: {
    top: 598,
    height: 37,
    width: 47,
    textAlign: "center",
    color: Color.colorBlack,
  },
  starFill4IconPosition: {
    height: 15,
    top: 509,
    position: "absolute",
  },
  arrowLayout: {
    height: 30,
    width: 26,
    left: 305,
    position: "absolute",
  },
  bookmarkIconLayout: {
    height: 21,
    width: 23,
    position: "absolute",
    overflow: "hidden",
  },
  groupChildLayout: {
    height: 325,
    width: 360,
    left: 0,
    position: "absolute",
  },
  epicDesigns2Position: {
    top: 21,
    position: "absolute",
  },
  yearsPosition: {
    top: 140,
    height: 37,
    width: 47,
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  iconPosition: {
    left: 310,
    position: "absolute",
  },
  vedicmeetPosition: {
    top: 24,
    position: "absolute",
  },
  eyeIconLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  landingPageChild: {
    height: 59,
    borderTopWidth: 0.3,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorFloralwhite,
    width: 360,
    left: 0,
    top: 743,
  },
  landingPageItem: {
    top: 72,
    height: 1,
    left: 0,
  },
  sort: {
    top: 34,
    left: 8,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.chivoRegular,
  },
  vectorIcon: {
    height: "56.82%",
    bottom: "43.18%",
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
  },
  sortParent: {
    top: 98,
    width: 31,
    height: 44,
  },
  shortlisted: {
    top: 36,
    textAlign: "left",
    color: Color.colorDimgray,
    fontFamily: FontFamily.chivoRegular,
    left: 0,
  },
  clipboardHeart1Icon: {
    left: 6,
    width: 29,
    height: 28,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  shortlistedParent: {
    top: 95,
    left: 242,
    width: 42,
    height: 46,
    position: "absolute",
  },
  vectorIcon1: {
    height: "53.57%",
    width: "73.53%",
    right: "14.71%",
    bottom: "46.43%",
    left: "11.76%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  vectorIcon2: {
    height: "26.9%",
    width: "45.88%",
    top: "13.33%",
    right: "28.53%",
    bottom: "59.76%",
    left: "25.59%",
  },
  contacts: {
    top: 32,
    color: "#e0a64e",
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    left: 0,
  },
  vectorParent: {
    height: "5.25%",
    width: "9.44%",
    top: "11.88%",
    right: "86.11%",
    bottom: "82.88%",
    left: "4.44%",
    position: "absolute",
  },
  vectorIcon3: {
    height: "12.1%",
    width: "16.67%",
    top: "12.35%",
    right: "53.7%",
    bottom: "75.56%",
    left: "29.63%",
  },
  vectorIcon4: {
    height: "48.15%",
    width: "88.89%",
    right: "3.7%",
    bottom: "51.85%",
    left: "7.41%",
    top: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  gallery: {
    color: Color.colorDimgray,
  },
  vectorGroup: {
    height: "5.06%",
    width: "7.5%",
    right: "71.11%",
    bottom: "82.81%",
    left: "21.39%",
  },
  vectorIcon5: {
    height: "48.77%",
    bottom: "51.23%",
    left: "0%",
    right: "0%",
    maxHeight: "100%",
    maxWidth: "100%",
    top: "0%",
    width: "100%",
  },
  map: {
    color: Color.colorLightgray_200,
  },
  vectorContainer: {
    height: "5.1%",
    width: "4.72%",
    right: "56.67%",
    bottom: "82.78%",
    left: "38.61%",
  },
  epicDesigns: {
    top: 207,
    left: 41,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  landingPageInner: {
    top: 163,
    height: 284,
    borderTopWidth: 0.3,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorFloralwhite,
    width: 360,
    left: 0,
  },
  vastuCourse: {
    left: 33,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.chivoBold,
    fontWeight: "700",
    textAlign: "left",
  },
  vastuIsAn: {
    top: 250,
    left: 32,
  },
  text: {
    fontSize: FontSize.size_5xl,
  },
  enrolled1: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.chivoRegular,
  },
  enrolled: {
    left: 29,
  },
  month: {
    left: 101,
  },
  price: {
    left: 179,
  },
  groupIcon: {
    top: 214,
    height: 16,
  },
  arrowRightShort1Icon: {
    left: 307,
    top: 184,
    position: "absolute",
  },
  details: {
    top: 204,
    left: 306,
    position: "absolute",
  },
  details1: {
    top: 796,
    left: 306,
    position: "absolute",
  },
  hide: {
    top: 270,
    color: Color.colorSienna,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    fontSize: FontSize.size_5xs,
  },
  shortlist: {
    top: 332,
  },
  report: {
    top: 398,
    left: 306,
    position: "absolute",
  },
  lineView: {
    top: 190,
    height: 237,
    position: "absolute",
  },
  landingPageChild1: {
    height: 23,
    width: 0,
    borderRightWidth: 0.3,
    left: 275,
    borderColor: Color.colorLightgray_200,
    borderStyle: "solid",
  },
  text3: {
    top: 373,
    left: 33,
  },
  text4: {
    top: 395,
    left: 33,
  },
  exclamationCircle1Icon: {
    top: 377,
    left: 310,
    position: "absolute",
    height: 16,
  },
  rectangleView: {
    top: 448,
    left: -1,
    height: 295,
    borderTopWidth: 0.3,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  astrologyCourse: {
    top: 479,
    left: 32,
    position: "absolute",
  },
  astrologyIsAn: {
    top: 545,
    left: 31,
  },
  enrolled2: {
    top: 598,
    height: 37,
    width: 47,
    textAlign: "center",
    color: Color.colorBlack,
  },
  month2: {
    left: 100,
    position: "absolute",
  },
  landingPageChild2: {
    width: 94,
    left: 32,
  },
  arrowRightShort1Icon1: {
    left: 1,
    top: 0,
    position: "absolute",
  },
  details2: {
    top: 20,
    left: 0,
    position: "absolute",
  },
  arrowRightShort1Parent: {
    top: 479,
  },
  arrowRightShort1Group: {
    top: 778,
  },
  hide1: {
    top: 565,
    left: 308,
    position: "absolute",
  },
  shortlist1: {
    top: 627,
    left: 302,
    position: "absolute",
  },
  report1: {
    top: 695,
    left: 305,
    position: "absolute",
  },
  bookmarkHeart1Icon: {
    top: 603,
    left: 306,
  },
  lineIcon: {
    top: 472,
    left: 274,
    width: 1,
    height: 233,
    position: "absolute",
  },
  landingPageChild3: {
    width: 359,
    height: 0,
    borderColor: Color.colorLightgray_200,
    borderTopWidth: 0.3,
    borderStyle: "solid",
    left: 0,
    top: 743,
    position: "absolute",
  },
  text7: {
    top: 668,
    left: 32,
  },
  text8: {
    top: 690,
    left: 32,
  },
  exclamationCircle1Icon1: {
    top: 674,
    left: 309,
    position: "absolute",
    height: 16,
  },
  starFill4Icon: {
    left: 91,
    width: 16,
    overflow: "hidden",
  },
  epicDesigns1: {
    top: 44,
    left: 41,
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    borderTopWidth: 0.3,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  epicDesigns2: {
    left: 33,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.chivoBold,
    fontWeight: "700",
    textAlign: "left",
  },
  passionateTeamOf: {
    top: 87,
    left: 32,
  },
  projects: {
    left: 29,
  },
  years: {
    left: 101,
  },
  text12: {
    fontSize: FontSize.size_5xl,
  },
  price4: {
    fontFamily: FontFamily.chivoRegular,
  },
  price3: {
    fontSize: FontSize.size_3xs,
  },
  price2: {
    left: 179,
  },
  groupItem: {
    top: 51,
    height: 16,
  },
  eyeSlashFill1Icon: {
    top: 85,
    height: 19,
    width: 20,
    left: 308,
    position: "absolute",
    overflow: "hidden",
  },
  arrowRightShort1Icon3: {
    height: 22,
    width: 23,
    overflow: "hidden",
    left: 307,
  },
  details4: {
    top: 41,
    left: 306,
    position: "absolute",
  },
  hide2: {
    top: 107,
    color: Color.colorSienna,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    fontSize: FontSize.size_5xs,
  },
  shortlist2: {
    top: 169,
  },
  call: {
    top: 229,
    color: Color.colorSienna,
    textAlign: "left",
    fontFamily: FontFamily.chivoRegular,
    fontSize: FontSize.size_5xs,
  },
  report2: {
    top: 288,
    left: 306,
    position: "absolute",
  },
  bookmarkHeart1Icon1: {
    top: 145,
    left: 307,
  },
  groupInner: {
    top: 26,
    height: 273,
    position: "absolute",
  },
  telephone1Icon: {
    top: 209,
    left: 310,
    position: "absolute",
    height: 16,
  },
  text14: {
    top: 210,
    left: 33,
  },
  text15: {
    top: 232,
    left: 33,
  },
  exclamationCircle1Icon2: {
    top: 267,
    left: 310,
    position: "absolute",
    height: 16,
  },
  epicDesignsParent: {
    top: 1138,
  },
  vectorIcon6: {
    height: "2.64%",
    width: "1.31%",
    top: "-4.07%",
    right: "-292.75%",
    bottom: "101.44%",
    left: "391.44%",
  },
  vedicmeet: {
    left: 118,
    width: 132,
    height: 35,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.chivoBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorDimgray,
  },
  threeDotsVertical1Icon: {
    width: 27,
    height: 27,
    left: 307,
    overflow: "hidden",
  },
  eyeSlash1Icon: {
    top: 246,
    left: 308,
  },
  eyeSlash2Icon: {
    top: 542,
    left: 306,
  },
  yogaCourse: {
    left: 33,
    color: Color.colorBlack,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.chivoBold,
    fontWeight: "700",
    textAlign: "left",
  },
  vectorIcon7: {
    height: "2.63%",
    width: "4.81%",
    top: "38.5%",
    right: "9.36%",
    bottom: "58.88%",
    left: "85.83%",
  },
  vedicLogo1Icon: {
    top: 13,
    width: 41,
    height: 41,
  },
  landingPage: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default LandingPage;
