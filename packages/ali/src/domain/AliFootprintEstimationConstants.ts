/*
 * © 2023 Thoughtworks, Inc.
 */
import {
  CloudConstantsByProvider,
  CloudConstantsEmissionsFactors,
  COMPUTE_PROCESSOR_TYPES,
  EstimateUnknownUsageBy,
  getAverage,
  getWattsByAverageOrMedian,
} from '@cloud-carbon-footprint/core'

export const ALI_CLOUD_CONSTANTS: CloudConstantsByProvider = {
  SSDCOEFFICIENT: 1.2, // watt hours / terabyte hour
  HDDCOEFFICIENT: 0.65, // watt hours / terabyte hour
  MEMORY_AVG: 80.69,
  MEMORY_BY_COMPUTE_PROCESSOR: {
    // gigaBytes / physical chip
    [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE]: 98.12,
    [COMPUTE_PROCESSOR_TYPES.SKYLAKE]: 81.32,
    [COMPUTE_PROCESSOR_TYPES.BROADWELL]: 69.65,
    [COMPUTE_PROCESSOR_TYPES.HASWELL]: 27.71,
    [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE]: 19.56,
    [COMPUTE_PROCESSOR_TYPES.SANDY_BRIDGE]: 16.7,
    [COMPUTE_PROCESSOR_TYPES.IVY_BRIDGE]: 9.67,
    [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN]: 89.6,
    [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN]: 129.78,
    [COMPUTE_PROCESSOR_TYPES.AWS_GRAVITON_2]: 129.78,
  },
  getMemory: (computeProcessors: string[]): number => {
    const memoryForProcessors: number[] = computeProcessors.map(
      (processor: string) => {
        return ALI_CLOUD_CONSTANTS.MEMORY_BY_COMPUTE_PROCESSOR[processor]
      },
    )
    const averageMemoryForProcessors = getAverage(memoryForProcessors)
    return averageMemoryForProcessors
      ? averageMemoryForProcessors
      : ALI_CLOUD_CONSTANTS.MEMORY_AVG
  },
  MIN_WATTS_AVG: 0.74,
  MIN_WATTS_BY_COMPUTE_PROCESSOR: {
    // CPUs
    [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE]: 0.64,
    [COMPUTE_PROCESSOR_TYPES.SKYLAKE]: 0.65,
    [COMPUTE_PROCESSOR_TYPES.BROADWELL]: 0.71,
    [COMPUTE_PROCESSOR_TYPES.HASWELL]: 1,
    [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE]: 1.14,
    [COMPUTE_PROCESSOR_TYPES.SANDY_BRIDGE]: 2.17,
    [COMPUTE_PROCESSOR_TYPES.IVY_BRIDGE]: 3.04,
    [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN]: 0.82,
    [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN]: 0.47,
    [COMPUTE_PROCESSOR_TYPES.AWS_GRAVITON_2]: 0.47,
    // GPUs
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_K520]: 26,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_A10G]: 18,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_T4]: 8,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_M60]: 35,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_K80]: 35,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_V100]: 35,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_A100]: 46,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_P4]: 9,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_P100]: 36,
    [COMPUTE_PROCESSOR_TYPES.AMD_RADEON_PRO_V520]: 26,
  },
  getMinWatts: (computeProcessors: string[]): number => {
    const minWattsForProcessors: number[] = computeProcessors.map(
      (processor: string) => {
        return ALI_CLOUD_CONSTANTS.MIN_WATTS_BY_COMPUTE_PROCESSOR[processor]
      },
    )
    const averageWattsForProcessors = getWattsByAverageOrMedian(
      computeProcessors,
      minWattsForProcessors,
    )
    return averageWattsForProcessors
      ? averageWattsForProcessors
      : ALI_CLOUD_CONSTANTS.MIN_WATTS_AVG
  },
  MAX_WATTS_AVG: 3.5,
  MAX_WATTS_BY_COMPUTE_PROCESSOR: {
    // CPUs
    [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE]: 3.97,
    [COMPUTE_PROCESSOR_TYPES.SKYLAKE]: 4.26,
    [COMPUTE_PROCESSOR_TYPES.BROADWELL]: 3.69,
    [COMPUTE_PROCESSOR_TYPES.HASWELL]: 4.74,
    [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE]: 5.42,
    [COMPUTE_PROCESSOR_TYPES.SANDY_BRIDGE]: 8.58,
    [COMPUTE_PROCESSOR_TYPES.IVY_BRIDGE]: 8.25,
    [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN]: 2.55,
    [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN]: 1.69,
    [COMPUTE_PROCESSOR_TYPES.AWS_GRAVITON_2]: 1.69,
    // GPUs
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_K520]: 229,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_A10G]: 153,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_T4]: 71,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_M60]: 306,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_K80]: 306,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_V100]: 306,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_A100]: 407,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_P4]: 76.5,
    [COMPUTE_PROCESSOR_TYPES.NVIDIA_TESLA_P100]: 306,
    [COMPUTE_PROCESSOR_TYPES.AMD_RADEON_PRO_V520]: 229,
  },
  getMaxWatts: (computeProcessors: string[]): number => {
    const maxWattsForProcessors: number[] = computeProcessors.map(
      (processor: string) => {
        return ALI_CLOUD_CONSTANTS.MAX_WATTS_BY_COMPUTE_PROCESSOR[processor]
      },
    )
    const averageWattsForProcessors = getWattsByAverageOrMedian(
      computeProcessors,
      maxWattsForProcessors,
    )
    return averageWattsForProcessors
      ? averageWattsForProcessors
      : ALI_CLOUD_CONSTANTS.MAX_WATTS_AVG
  },
  NETWORKING_COEFFICIENT: 0.001, // kWh / Gb
  MEMORY_COEFFICIENT: 0.000392, // kWh / Gb
  PUE_AVG: 1.3,
  getPUE: (): number => {
    return ALI_CLOUD_CONSTANTS.PUE_AVG
  },
  AVG_CPU_UTILIZATION_2020: 50,
  REPLICATION_FACTORS: {
    ECS: 1,
    DEFAULT: 1,
  },
  KILOWATT_HOURS_BY_SERVICE_AND_USAGE_UNIT: {
    total: {},
  },
  ESTIMATE_UNKNOWN_USAGE_BY: EstimateUnknownUsageBy.COST,
  SERVER_EXPECTED_LIFESPAN: 35040, // 4 years in hours
}

export const ALI_EMISSIONS_FACTORS_METRIC_TON_PER_KWH: CloudConstantsEmissionsFactors =
  {
    ['Unknown']: 0.0003512799615, // Average of above regions
  }
