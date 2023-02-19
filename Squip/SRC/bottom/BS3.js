import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import styles from '../styling/NativeStyling';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BS3 = () => {
  return (
    <>
      <Header />
      <View>
        <View style={[styles.ms3, styles.mt3]}>
          <Text style={[styles.textBold, styles.textGreen, styles.fs1]}>
            Your Bag
          </Text>
        </View>
        <ScrollView>
          <View>
            <View
              style={[
                styles.flexRow,
                styles.alignItemsCenter,
                styles.flexNoWrap,
              ]}
            >
              {/* product image  */}
              <View style={[styles.mt1]}>
                <Image
                  source={require('../assest/img/sage.png')}
                  style={[{width: 100, height: 100}]}
                />
              </View>
              <View style={[styles.flexRow, styles.flexWrap]}>
                <View style={[styles.flexRow]}>
                  <Text style={[styles.textBlack, styles.textBold]}>
                    Watermelon Peperomia
                  </Text>
                  <Ionicons
                    name="bookmark-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Text style={[styles.textBlack, styles.textBold]}>$350</Text>
                </View>

                <View
                  style={[styles.flexRow, styles.mt1, styles.alignItemsCenter]}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Text style={[styles.textBlack, styles.textBold]}>1</Text>
                  <Ionicons
                    name="remove-circle-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Ionicons
                    name="trash-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                </View>
              </View>
            </View>
            <View
              style={[
                styles.flexRow,
                styles.alignItemsCenter,
                styles.flexNoWrap,
              ]}
            >
              {/* product image  */}
              <View style={[styles.mt1]}>
                <Image
                  source={require('../assest/img/sage.png')}
                  style={[{width: 100, height: 100}]}
                />
              </View>

              <View style={[styles.flexRow, styles.flexWrap]}>
                <View style={[styles.flexRow]}>
                  <Text style={[styles.textBlack, styles.textBold]}>
                    Watermelon Peperomia
                  </Text>
                  <Ionicons
                    name="bookmark-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Text style={[styles.textBlack, styles.textBold]}>$350</Text>
                </View>

                <View
                  style={[styles.flexRow, styles.mt1, styles.alignItemsCenter]}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Text style={[styles.textBlack, styles.textBold]}>1</Text>
                  <Ionicons
                    name="remove-circle-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Ionicons
                    name="trash-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                </View>
              </View>
            </View>
            <View
              style={[
                styles.flexRow,
                styles.alignItemsCenter,
                styles.flexNoWrap,
              ]}
            >
              {/* product image  */}
              <View style={[styles.mt1]}>
                <Image
                  source={require('../assest/img/sage.png')}
                  style={[{width: 100, height: 100}]}
                />
              </View>

              <View style={[styles.flexRow, styles.flexWrap]}>
                <View style={[styles.flexRow]}>
                  <Text style={[styles.textBlack, styles.textBold]}>
                    Watermelon Peperomia
                  </Text>
                  <Ionicons
                    name="bookmark-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Text style={[styles.textBlack, styles.textBold]}>$350</Text>
                </View>

                <View
                  style={[styles.flexRow, styles.mt1, styles.alignItemsCenter]}
                >
                  <Ionicons
                    name="add-circle-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Text style={[styles.textBlack, styles.textBold]}>1</Text>
                  <Ionicons
                    name="remove-circle-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                  <Ionicons
                    name="trash-outline"
                    size={25}
                    color="green"
                    style={[styles.ms1, styles.me1]}
                  />
                </View>
              </View>
            </View>
          </View>

          <View>
            <View style={[styles.flexRow]}>
              <Ionicons
                name="walk-outline"
                size={50}
                color="green"
                style={[styles.ms1, styles.me1]}
              />
              <Text style={[styles.textBold, styles.textBlack]}>Delivery</Text>
              <Text style={[styles.textBold, styles.textBlack, styles.ms2]}>
                -----------
              </Text>
              <Text style={[styles.textBold, styles.textBlack,]}>
                $80
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default BS3;
