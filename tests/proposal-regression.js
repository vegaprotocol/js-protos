const test = require("brittle");
const InputData = require("../vega/commands/v1/InputData.js");

test("encode then decode proposal submission", (assert) => {
  const proposalSubmission = {
    reference: "BTC/USD-PERPS Incentive 2",
    terms: {
      closingTimestamp: "1695394443",
      enactmentTimestamp: "1695394503",
      newMarket: {
        changes: {
          instrument: {
            name: "BTC/USD Perpetual Incentive",
            code: "BTC/USD-PERP Inc",

            perpetual: {
              clampLowerBound: "0",
              clampUpperBound: "0",
              interestRate: "0",
              marginFundingFactor: "0.1",
              settlementAsset:
                "8a246b15bf185065d3f41a710f3eea0fbbe8754a8464501cf4a6d253d69c6423",
              quoteName: "USD-P",
              dataSourceSpecForSettlementData: {
                external: {
                  ethOracle: {
                    address: "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43",
                    abi: '[{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}]',
                    method: "latestAnswer",
                    normalisers: [
                      {
                        name: "btc.price",
                        expression: "$[0]",
                      },
                    ],
                    requiredConfirmations: 3,
                    trigger: {
                      timeTrigger: {
                        every: 30,
                      },
                    },
                    filters: [
                      {
                        key: {
                          name: "btc.price",
                          type: "TYPE_INTEGER",
                          numberDecimalPlaces: 8,
                        },
                        conditions: [
                          {
                            operator: "OPERATOR_GREATER_THAN_OR_EQUAL",
                            value: "0",
                          },
                        ],
                      },
                    ],
                  },
                },
              },
              dataSourceSpecForSettlementSchedule: {
                internal: {
                  timeTrigger: {
                    conditions: [
                      {
                        operator: "OPERATOR_GREATER_THAN_OR_EQUAL",
                        value: "0",
                      },
                    ],
                    triggers: [
                      {
                        every: 1800,
                      },
                    ],
                  },
                },
              },
              dataSourceSpecBinding: {
                settlementDataProperty: "btc.price",
                settlementScheduleProperty: "vegaprotocol.builtin.timetrigger",
              },
            },
          },
          metadata: [
            "base:BTC",
            "quote:USD-P",
            "class:fx/crypto",
            "quarterly",
            "sector:defi",
            "enactment:2023-06-15T14:00:00Z",
            "settlement:2023-09-30T08:00:00Z",
          ],
          priceMonitoringParameters: {
            triggers: [
              {
                horizon: "3600",
                probability: "0.9999",
                auctionExtension: "120",
              },
              {
                horizon: "14400",
                probability: "0.9999",
                auctionExtension: "180",
              },
              {
                horizon: "43200",
                probability: "0.9999",
                auctionExtension: "300",
              },
            ],
          },
          liquidityMonitoringParameters: {
            targetStakeParameters: {
              timeWindow: "3600",
              scalingFactor: 1,
            },
            triggeringRatio: "0.7",
            auctionExtension: "1",
          },

          liquiditySlaParameters: {
            priceRange: "0.05",
            commitmentMinTimeFraction: "0.95",
            performanceHysteresisEpochs: 1,
            slaCompetitionFactor: "0.95",
          },

          logNormal: {
            riskAversionParameter: 0.000001,
            tau: 0.0001140771161,
            params: {
              sigma: 1.5,
            },
          },
          decimalPlaces: "1",
          positionDecimalPlaces: "4",
          linearSlippageFactor: "0.001",
          quadraticSlippageFactor: "0.0",
        },
      },
    },
    rationale: {
      description:
        "## Summary\n\nThis proposal requests to list BTC PERPS Incentive as a market with USD-P as a settlement asset on the Vega Network as discussed in: https://community.vega.xyz/.\n\n## Rationale\n\n- BTC is the largest Crypto asset with the highest volume and Marketcap.\n- Given the price, 1 decimal places will be used for price due to the number of valid digits in asset price. \n- Position decimal places will be set to 4 considering the value per contract\n- USDT is chosen as settlement asset due to its stability.",
      title: "BTC USD PERPS Incentive",
    },
  };

  const expected = {
    nonce: 0n,
    blockHeight: 0n,
    command: {
      proposalSubmission: {
        reference: "BTC/USD-PERPS Incentive 2",
        terms: {
          closingTimestamp: 1695394443n,
          enactmentTimestamp: 1695394503n,
          validationTimestamp: 0n,
          change: {
            newMarket: {
              changes: {
                instrument: {
                  name: "BTC/USD Perpetual Incentive",
                  code: "BTC/USD-PERP Inc",
                  product: {
                    perpetual: {
                      settlementAsset:
                        "8a246b15bf185065d3f41a710f3eea0fbbe8754a8464501cf4a6d253d69c6423",
                      quoteName: "USD-P",
                      marginFundingFactor: "0.1",
                      interestRate: "0",
                      clampLowerBound: "0",
                      clampUpperBound: "0",
                      dataSourceSpecForSettlementSchedule: {
                        sourceType: {
                          internal: {
                            sourceType: {
                              timeTrigger: {
                                conditions: [
                                  {
                                    operator: "OPERATOR_GREATER_THAN_OR_EQUAL",
                                    value: "0",
                                  },
                                ],
                                triggers: [{ initial: null, every: 1800n }],
                              },
                            },
                          },
                        },
                      },
                      dataSourceSpecForSettlementData: {
                        sourceType: {
                          external: {
                            sourceType: {
                              ethOracle: {
                                address:
                                  "0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43",
                                abi: '[{"inputs":[],"name":"latestAnswer","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"}]',
                                method: "latestAnswer",
                                args: [],
                                trigger: {
                                  trigger: {
                                    timeTrigger: {
                                      initial: null,
                                      every: 30n,
                                      until: null,
                                    },
                                  },
                                },
                                requiredConfirmations: 3n,
                                filters: [
                                  {
                                    key: {
                                      name: "btc.price",
                                      type: "TYPE_INTEGER",
                                      numberDecimalPlaces: 8n,
                                    },
                                    conditions: [
                                      {
                                        operator:
                                          "OPERATOR_GREATER_THAN_OR_EQUAL",
                                        value: "0",
                                      },
                                    ],
                                  },
                                ],
                                normalisers: [
                                  {
                                    name: "btc.price",
                                    expression: "$[0]",
                                  },
                                ],
                                sourceChainId: 0n,
                              },
                            },
                          },
                        },
                      },
                      dataSourceSpecBinding: {
                        settlementDataProperty: "btc.price",
                        settlementScheduleProperty:
                          "vegaprotocol.builtin.timetrigger",
                      },
                      fundingRateScalingFactor: null,
                      fundingRateLowerBound: null,
                      fundingRateUpperBound: null,
                      internalCompositePriceConfiguration: null,
                    },
                  },
                },
                decimalPlaces: 1n,
                metadata: [
                  "base:BTC",
                  "quote:USD-P",
                  "class:fx/crypto",
                  "quarterly",
                  "sector:defi",
                  "enactment:2023-06-15T14:00:00Z",
                  "settlement:2023-09-30T08:00:00Z",
                ],
                priceMonitoringParameters: {
                  triggers: [
                    {
                      horizon: 3600n,
                      probability: "0.9999",
                      auctionExtension: 120n,
                    },
                    {
                      horizon: 14400n,
                      probability: "0.9999",
                      auctionExtension: 180n,
                    },
                    {
                      horizon: 43200n,
                      probability: "0.9999",
                      auctionExtension: 300n,
                    },
                  ],
                },
                liquidityMonitoringParameters: {
                  targetStakeParameters: {
                    timeWindow: 3600n,
                    scalingFactor: 1,
                  },
                  triggeringRatio: "0.7",
                  auctionExtension: 1n,
                },
                positionDecimalPlaces: 4n,
                lpPriceRange: null,
                linearSlippageFactor: "0.001",
                quadraticSlippageFactor: "0.0",
                successor: null,
                liquiditySlaParameters: {
                  priceRange: "0.05",
                  commitmentMinTimeFraction: "0.95",
                  performanceHysteresisEpochs: 1n,
                  slaCompetitionFactor: "0.95",
                },
                liquidityFeeSettings: {},
                liquidationStrategy: {},
                markPriceConfiguration: {},
                tickSize: "",
                riskParameters: {
                  logNormal: {
                    riskAversionParameter: 0.000001,
                    tau: 0.0001140771161,
                    params: { mu: 0, r: 0, sigma: 1.5 },
                  },
                },
              },
            },
          },
        },
        rationale: {
          description:
            "## Summary\n" +
            "\n" +
            "This proposal requests to list BTC PERPS Incentive as a market with USD-P as a settlement asset on the Vega Network as discussed in: https://community.vega.xyz/.\n" +
            "\n" +
            "## Rationale\n" +
            "\n" +
            "- BTC is the largest Crypto asset with the highest volume and Marketcap.\n" +
            "- Given the price, 1 decimal places will be used for price due to the number of valid digits in asset price. \n" +
            "- Position decimal places will be set to 4 considering the value per contract\n" +
            "- USDT is chosen as settlement asset due to its stability.",
          title: "BTC USD PERPS Incentive",
        },
      },
    },
  };

  const actual = InputData.decode(InputData.encode({ proposalSubmission }));

  assert.alike(actual, expected);

  assert.end();
});
