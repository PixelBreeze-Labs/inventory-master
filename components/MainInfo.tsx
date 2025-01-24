import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import Listlabel from "./Listlabel";
import DividerIcon from "./DividerIcon";
import {
  Padding,
  Gap,
  FontSize,
  FontFamily,
  Color,
  StyleVariable,
  Border,
} from "../GlobalStyles";

export type MainInfoType = {
  labelValue1?: string;
  labelValue?: string;
  iconWrapper?: ImageSourcePropType;
  divider?: ImageSourcePropType;
  divider1?: ImageSourcePropType;
  divider2?: ImageSourcePropType;

  /** Style props */
  propTop?: number | string;
  propLeft?: number | string;
  propMarginLeft?: number | string;
  propHeight?: number | string;
  propHeight1?: number | string;
  propAlignSelf?: string;
  propWidth?: number | string;
  propMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const MainInfo = ({
  labelValue1,
  propTop,
  propLeft,
  propMarginLeft,
  propHeight,
  propHeight1,
  propAlignSelf,
  propWidth,
  propMarginTop,
  labelValue,
  iconWrapper,
  divider,
  divider1,
  divider2,
}: MainInfoType) => {
  const mainInfoStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("marginLeft", propMarginLeft),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propLeft, propMarginLeft, propHeight]);

  const cardStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
      ...getStyleValue("alignSelf", propAlignSelf),
      ...getStyleValue("width", propWidth),
    };
  }, [propHeight1, propAlignSelf, propWidth]);

  const indicatorStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.mainInfo, mainInfoStyle]}>
      <View style={[styles.card, cardStyle]}>
        <View style={[styles.listmasterBundle, styles.listmasterSpaceBlock]}>
          <View style={[styles.wrapper, styles.wrapperFlexBox]}>
            <View style={styles.listcontent}>
              <View style={styles.wrapper1}>
                <Listlabel labelValue={labelValue} iconWrapper={iconWrapper} />
                <Text style={styles.labelValue}>{labelValue1}</Text>
              </View>
            </View>
            <View style={[styles.toggleswitch, styles.listsuffixFlexBox]}>
              <View style={[styles.indicator, indicatorStyle]} />
              <View style={styles.knob} />
            </View>
          </View>
          <DividerIcon divider={divider} />
        </View>
        <View style={styles.list}>
          <View style={[styles.listmasterBundle1, styles.listmasterSpaceBlock]}>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <View style={styles.listcontent}>
                <View style={styles.wrapper1}>
                  <View style={styles.wrapperFlexBox}>
                    <Text style={[styles.labelValue1, styles.valueLayout]}>
                      Giảm giá
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.listsuffix, styles.listsuffixFlexBox]}>
                <Text style={[styles.dataValue, styles.valueLayout]}>-- ₫</Text>
              </View>
            </View>
            <DividerIcon divider={divider1} />
          </View>
        </View>
        <View style={styles.list}>
          <View style={[styles.listmasterBundle1, styles.listmasterSpaceBlock]}>
            <View style={[styles.wrapper, styles.wrapperFlexBox]}>
              <View style={styles.listcontent}>
                <View style={styles.wrapper1}>
                  <View style={styles.wrapperFlexBox}>
                    <Text style={[styles.labelValue1, styles.valueLayout]}>
                      Giảm giá
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.listsuffix, styles.listsuffixFlexBox]}>
                <Text style={[styles.dataValue, styles.valueLayout]}>-- ₫</Text>
              </View>
            </View>
            <DividerIcon divider={divider2} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listmasterSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    gap: Gap.gap_sm,
    alignSelf: "stretch",
  },
  wrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  listsuffixFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  valueLayout: {
    lineHeight: 21,
    fontSize: FontSize.base14pxBold_size,
  },
  labelValue: {
    fontSize: FontSize.size_xs,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.manropeMedium,
    color: Color.colorGray_200,
    textAlign: "left",
    alignSelf: "stretch",
  },
  wrapper1: {
    flex: 1,
  },
  listcontent: {
    flex: 1,
    flexDirection: "row",
  },
  indicator: {
    marginTop: -5.7,
    top: "50%",
    left: 10,
    borderRadius: StyleVariable.radiusRadi1,
    width: 3,
    height: 12,
    zIndex: 0,
    display: "none",
    backgroundColor: Color.backgroundPanelDay,
    position: "absolute",
  },
  knob: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 1.75,
    },
    shadowRadius: 4,
    elevation: 4,
    borderRadius: StyleVariable.radiusRadi4,
    width: 22,
    height: 20,
    zIndex: 1,
    shadowOpacity: 1,
    backgroundColor: Color.backgroundPanelDay,
  },
  toggleswitch: {
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    borderRadius: StyleVariable.radiusRadi5,
    backgroundColor: Color.colorMidnightblue,
    width: 48,
    overflow: "hidden",
    padding: StyleVariable.space2,
    shadowOpacity: 1,
  },
  wrapper: {
    gap: Gap.gap_sm,
  },
  listmasterBundle: {
    height: 57,
    paddingVertical: 0,
    gap: Gap.gap_sm,
  },
  labelValue1: {
    fontFamily: FontFamily.base14pxRegular,
    color: Color.textListPrimaryDay,
    textAlign: "left",
  },
  dataValue: {
    fontWeight: "700",
    fontFamily: FontFamily.base14pxBold,
    color: Color.textInputDisable,
    textAlign: "right",
  },
  listsuffix: {
    alignSelf: "stretch",
  },
  listmasterBundle1: {
    paddingTop: Padding.p_5xs,
    gap: Gap.gap_sm,
  },
  list: {
    display: "none",
    alignSelf: "stretch",
  },
  card: {
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: Color.colorWhitesmoke_100,
    borderWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    backgroundColor: Color.backgroundPanelDay,
    alignSelf: "stretch",
  },
  mainInfo: {
    top: 32,
    left: 0,
    width: 344,
    position: "absolute",
  },
});

export default MainInfo;
