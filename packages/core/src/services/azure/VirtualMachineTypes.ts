/*
 * © 2021 ThoughtWorks, Inc.
 */

import {
  COMPUTE_PROCESSOR_TYPES,
  cascadeLakeSkylakeBroadwellHaswell,
  cascadeLakeSkylake,
  cascadeLakeSkylakeBroadwell,
  cascadeLakeHaswell,
} from '../../domain/ComputeProcessorTypes'

export const VIRTUAL_MACHINE_TYPE_SERIES_MAPPING: {
  [series: string]: { [instanceType: string]: number[] } // [vcpus, memory]
} = {
  'non-series': {
    'vCPU Duration': [1, null],
    vCore: [1, null],
    '2 vCore': [2, null],
    D1: [1, 3.5],
    D2: [2, 7],
    D3: [4, 14],
    D4: [8, 28],
    // Basic Service Plan
    B1: [1, 1.75],
    B2: [2, 3.5],
    B3: [4, 7],
    // Standard Service Plan
    S1: [1, 1.75],
    S2: [2, 3.5],
    S3: [4, 7],
    // Premium v2 Service Plan
    'P1 v2': [1, 3.5],
    'P2 v2': [2, 7],
    'P3 v2': [4, 14],
    // Premium v3 Service Plan
    'P1 v3': [2, 8],
    'P2 v3': [4, 16],
    'P3 v3': [8, 32],
    // Isolated Service Plan
    I1: [1, 3.5],
    I2: [2, 7],
    I3: [4, 14],
    // Isolated v2 Plan
    'I1 v2': [2, 8],
    'I2 v2': [4, 16],
    'I3 v2': [8, 32],
  },
  'As-series': {
    A0: [1, 0.75],
    A1: [1, 1.75],
    A2: [2, 3.5],
    A3: [4, 7],
    A4: [8, 14],
  },
  'Bs-series': {
    B1LS: [1, 0.5],
    B1S: [1, 1],
    B1MS: [1, 2],
    B2S: [2, 4],
    B2MS: [2, 8],
    B4MS: [4, 16],
    B8MS: [8, 32],
    B12MS: [12, 48],
    B16MS: [16, 64],
    B20MS: [20, 80],
  },
  'Av2 Standard': {
    'A1 v2': [1, 2],
    'A2 v2': [2, 4],
    'A2m v2': [2, 16],
    'A4 v2': [4, 8],
    'A4m v2': [4, 32],
    'A8 v2': [8, 16],
    'A8m v2': [8, 64],
  },
  'D2a – D96a v4': {
    'D2a v4': [2, 8],
    'D4a v4': [4, 16],
    'D8a v4': [8, 32],
    'D16a v4': [16, 64],
    'D32a v4': [32, 128],
    'D48a v4': [48, 192],
    'D64a v4': [64, 256],
    'D96a v4': [96, 384],
  },
  'D2as – D96as v4': {
    'D2as v4': [2, 8],
    'D4as v4': [4, 16],
    'D8as v4': [8, 32],
    'D16as v4': [16, 64],
    'D32as v4': [32, 128],
    'D48as v4': [48, 192],
    'D64as v4': [64, 256],
    'D96as v4': [96, 384],
  },
  'D2d – D64d v4': {
    'D2d v4': [2, 8],
    'D4d v4': [4, 16],
    'D8d v4': [8, 32],
    'D16d v4': [16, 64],
    'D32d v4': [32, 128],
    'D48d v4': [48, 192],
    'D64d v4': [64, 256],
  },
  'D2ds – D64ds v4': {
    'D2ds v4': [2, 8],
    'D4ds v4': [4, 16],
    'D8ds v4': [8, 32],
    'D16ds v4': [16, 64],
    'D32ds v4': [32, 128],
    'D48ds v4': [48, 192],
    'D64ds v4': [64, 256],
  },
  'D2 – D64 v4': {
    'D2 v4': [2, 8],
    'D4 v4': [4, 16],
    'D8 v4': [8, 32],
    'D16 v4': [16, 64],
    'D32 v4': [32, 128],
    'D48 v4': [48, 192],
    'D64 v4': [64, 256],
  },
  'D2s – D64s v4': {
    'D2s v4': [2, 8],
    'D4s v4': [4, 16],
    'D8s v4': [8, 32],
    'D16s v4': [16, 64],
    'D32s v4': [32, 128],
    'D48s v4': [48, 192],
    'D64s v4': [64, 256],
  },
  'D2-64 v3': {
    'D2 v3': [2, 8],
    'D4 v3': [4, 16],
    'D8 v3': [8, 32],
    'D16 v3': [16, 64],
    'D32 v3': [32, 128],
    'D48 v3': [48, 192],
    'D64 v3': [64, 256],
  },
  'D2s-64s v3': {
    'D2s v3': [2, 8],
    'D4s v3': [4, 16],
    'D8s v3': [8, 32],
    'D16s v3': [16, 64],
    'D32s v3': [32, 128],
    'D48s v3': [48, 192],
    'D64s v3': [64, 256],
  },
  'D1-5 v2': {
    'D1 v2': [1, 3.5],
    'D2 v2': [2, 7],
    'D3 v2': [4, 14],
    'D4 v2': [8, 28],
    'D5 v2': [16, 56],
  },
  'D1s-5s v2': {
    'DS1 v2': [1, 3.5],
    'DS2 v2': [2, 7],
    'DS3 v2': [4, 14],
    'DS4 v2': [8, 28],
    'DS5 v2': [16, 56],
  },
  'DCsv2-series': {
    'DC1s v2': [1, 4],
    'DC2s v2': [2, 8],
    'DC4s v2': [4, 16],
    'DC8 v2': [8, 32],
  },
  'Fsv2-series': {
    'F2s v2': [2, 4],
    'F4s v2': [4, 8],
    'F8s v2': [8, 16],
    'F16s v2': [16, 32],
    'F32s v2': [32, 64],
    'F48s v2': [48, 96],
    'F64s v2': [64, 128],
    'F72s v2': [72, 144],
  },
  'F-series': {
    F1: [1, 2],
    F2: [2, 4],
    F4: [4, 8],
    F8: [8, 16],
    F16: [16, 32],
  },
  'Fs-Series': {
    F1s: [1, 2],
    F2s: [2, 4],
    F4s: [4, 8],
    F8s: [8, 16],
    F16s: [16, 32],
  },
  'E2a – E96a v4': {
    'E2a v4': [2, 16],
    'E4a v4': [4, 32],
    'E8a v4': [8, 64],
    'E16a v4': [16, 128],
    'E20a v4': [20, 160],
    'E32a v4': [32, 256],
    'E48a v4': [48, 384],
    'E64a v4': [64, 512],
    'E96a v4': [96, 672],
  },
  'E2as – E96as v4': {
    'E2as v4': [2, 16],
    'E4as v4': [4, 32],
    'E8as v4': [8, 64],
    'E16as v4': [16, 128],
    'E20as v4': [20, 160],
    'E32as v4': [32, 256],
    'E48as v4': [48, 384],
    'E64as v4': [64, 512],
    'E96as v4': [96, 672],
  },
  'E2 – E96 v5': {
    'E2 v5': [2, 16],
    'E4 v5': [4, 32],
    'E8 v5': [8, 64],
    'E16 v5': [16, 128],
    'E20 v5': [20, 160],
    'E32 v5': [32, 256],
    'E48 v5': [48, 384],
    'E64 v5': [64, 512],
    'E96 v5': [96, 672],
  },
  'E2d – E64d v4': {
    'E2d v4': [2, 16],
    'E4d v4': [4, 32],
    'E8d v4': [8, 64],
    'E16d v4': [16, 128],
    'E20d v4': [20, 160],
    'E32d v4': [32, 256],
    'E48d v4': [48, 384],
    'E64d v4': [64, 504],
  },
  'E2ds – E64ds v4': {
    'E2ds v4': [2, 16],
    'E4ds v4': [4, 32],
    'E8ds v4': [8, 64],
    'E16ds v4': [16, 128],
    'E20ds v4': [20, 160],
    'E32ds v4': [32, 256],
    'E48ds v4': [48, 384],
    'E64ds v4': [64, 504],
    'E80ids v4 1': [80, 504],
  },
  'E2 – E64 v4': {
    'E2 v4': [2, 16],
    'E4 v4': [4, 32],
    'E8 v4': [8, 64],
    'E16 v4': [16, 128],
    'E32 v4': [32, 256],
    'E48 v4': [48, 384],
    'E64 v4': [64, 504],
  },
  'E2s – E64s v4': {
    'E2s v4': [2, 16],
    'E4s v4': [4, 32],
    'E8s v4': [8, 64],
    'E16s v4': [16, 128],
    'E20s v4': [20, 160],
    'E32s v4': [32, 256],
    'E48s v4': [48, 384],
    'E64s v4': [64, 504],
    'E80is v4 1': [80, 504],
  },
  'E2-64 v3': {
    'E2 v3': [2, 16],
    'E4 v3': [4, 32],
    'E8 v3': [8, 64],
    'E16 v3': [16, 128],
    'E20 v3': [20, 160],
    'E32 v3': [32, 256],
    'E48 v3': [48, 384],
    'E64i v3 1': [64, 432],
    'E64 v3': [64, 432],
  },
  'E2s-64s v3': {
    'E2s v3': [2, 16],
    'E4s v3': [4, 32],
    'E8s v3': [8, 64],
    'E16s v3': [16, 128],
    'E20s v3': [20, 160],
    'E32s v3': [32, 256],
    'E48s v3': [48, 384],
    'E64is v3 1': [64, 432],
    'E64s v3': [64, 432],
  },
  'D11-15 v2': {
    'D11 v2': [2, 14],
    'D12 v2': [4, 28],
    'D13 v2': [8, 56],
    'D14 v2': [16, 112],
    'D15i v2 1': [20, 140],
    'D15 v2': [20, 140],
  },
  'D11S-15S v2': {
    'DS11 v2': [2, 14],
    'DS12 v2': [4, 28],
    'DS13 v2': [8, 56],
    'DS14 v2': [16, 112],
    'DS15i v2 1': [20, 140],
    'DS15 v2': [20, 140],
  },
  'G-series': {
    G1: [2, 28],
    G2: [4, 56],
    G3: [8, 112],
    G4: [16, 224],
    G5: [32, 448],
  },
  'Gs-Series': {
    Gs1: [2, 28],
    Gs2: [4, 56],
    Gs3: [8, 112],
    Gs4: [16, 224],
    Gs5: [32, 448],
  },
  'M-series': {
    M8ms: [8, 219],
    M16ms: [16, 438],
    M32ts: [32, 192],
    M32ls: [32, 256],
    M32ms: [32, 875],
    M64ls: [64, 512],
    M64s: [64, 1024],
    'M64 1': [64, 1024],
    M64ms: [64, 1792],
    'M64m 1': [64, 1792],
    M128s: [128, 2048],
    'M128 1': [128, 2048],
    M128ms: [128, 3892],
    'M128m 1': [128, 3892],
  },
  'Mdsv2-series': {
    'M32dms v2': [32, 875],
    'M64ds v2': [64, 1024],
    'M64dms v2': [64, 1792],
    'M128ds v2': [128, 2048],
    'M128dms v2': [128, 3892],
    'M192ids v2': [192, 2048],
    'M192idms v2': [192, 4096],
  },
  'Msv2-series': {
    'M32ms v2': [32, 875],
    'M64s v2': [64, 1024],
    'M64ms v2': [64, 1792],
    'M128s v2': [128, 2048],
    'M128ms v2': [128, 3892],
    'M192is v2': [192, 2048],
    'M192ims v2': [192, 4096],
  },
  'Mv2-series': {
    'M208s v2': [208, 2850],
    'M208ms v2': [208, 5700],
    'M416s v2': [416, 5700],
    'M416ms v2': [416, 11400],
  },
  'SAP HANA on Azure Large Instances': {
    S96: [96, 768],
    S192: [192, 2048],
    S192m: [192, 4096],
    S192xm: [192, 6144],
    S384: [384, 4096],
    S384m: [384, 6144],
    S384xm: [384, 8192],
    S384xxm: [384, 12000],
    S576m: [576, 12000],
  },
  'SAP HANA on Azure Large Instances (second generation)': {
    S224: [224, 3072],
    S224oo: [224, 4608],
    S224m: [224, 6144],
    S224om: [224, 6144],
    S224ooo: [224, 7680],
    S224oom: [224, 9216],
    S448: [448, 6144],
    S448oo: [448, 9216],
    S448m: [448, 12288],
    S448om: [448, 12288],
    S448ooo: [448, 15360],
    S448oom: [448, 18432],
    S672: [672, 9216],
    S672oo: [672, 13824],
    S672m: [672, 18432],
    S672om: [672, 18432],
    S672ooo: [672, 23040],
    S672oom: [672, 27648],
    S896: [896, 12288],
    S896oo: [896, 18432],
    S896m: [896, 24576],
    S896om: [896, 24576],
    S896ooo: [896, 30720],
    S896oom: [896, 36864],
  },
  'Lsv2-series': {
    'L8s v2': [8, 64],
    'L16s v2': [16, 128],
    'L32s v2': [32, 256],
    'L48s v2': [48, 384],
    'L64s v2': [64, 512],
    'L80s v2': [80, 640],
  },
  'Ls-series': {
    L4s: [4, 32],
    L8s: [8, 64],
    L16s: [16, 128],
    L32s: [32, 256],
  },
  'NC-series': {
    NC6: [6, 56],
    NC12: [12, 112],
    NC24r: [24, 224],
    NC24: [24, 224],
  },
  'NC-series Promo': {
    'NC6 Promo': [6, 56],
    'NC12 Promo': [12, 112],
    'NC24 Promo': [24, 224],
    'NC24r Promo': [24, 224],
  },
  'NCsv2-series': {
    'NC6s v2': [6, 112],
    'NC12s v2': [12, 224],
    'NC24rs v2': [24, 448],
    'NC24s v2': [24, 448],
  },
  'NCsv3-series': {
    'NC6s v3': [6, 112],
    'NC12s v3': [12, 224],
    'NC24rs v3': [24, 448],
    'NC24s v3': [24, 448],
  },
  'NCas_T4_v3 Series': {
    'NC4as T4 v3': [4, 28],
    'NC8as T4 v3': [8, 56],
    'NC16as T4 v3': [16, 112],
    'NC64as T4 v3': [64, 448],
  },
  'NP-Series': {
    NP10s: [10, 192],
    NP20s: [20, 384],
    NP40s: [40, 768],
  },
  'NV-series': {
    NV6: [6, 56],
    NV12: [12, 112],
    NV24: [24, 224],
  },
  'NVv3-series': {
    'NV12s v3': [12, 112],
    'NV24s v3': [24, 224],
    'NV48s v3': [48, 448],
  },
  'NDs-series': {
    ND6s: [6, 112],
    ND12s: [12, 224],
    ND24rs: [24, 448],
    ND24s: [24, 448],
  },
  'NDv2 Series': {
    'ND40rs v2': [40, 672],
  },
  'H-series': {
    H8: [8, 56],
    H8m: [8, 112],
    H16r: [16, 112],
    H16: [16, 112],
    H16mr: [16, 224],
    H16m: [16, 224],
  },
  'H-series promo': {
    'H8 Promo': [8, 56],
    'H8m Promo': [8, 112],
    'H16 Promo': [16, 112],
    'H16r Promo': [16, 112],
    'H16m Promo': [16, 224],
    'H16mr Promo': [16, 224],
  },
  'HBv2-series': {
    'HB120rs v2': [120, 480],
  },
  'HC-series': {
    HC44rs: [44, 352],
  },
  'HB-series': {
    HB60rs: [60, 240],
  },
  'ND A100 v4 series': {
    'ND96asr A100 v4': [96, 900],
  },
}

export const VIRTUAL_MACHINE_TYPE_VCPU_MEMORY_MAPPING: {
  [instanceType: string]: number[] // [vcpus, memory]
} = {
  'vCPU Duration': [1],
  vCore: [1],
  '2 vCore': [2],
  D1: [1, 3.5],
  D2: [2, 7],
  D3: [4, 14],
  D4: [8, 28],
  // Basic Service Plan
  B1: [1, 1.75],
  B2: [2, 3.5],
  B3: [4, 7],
  // Standard Service Plan
  S1: [1, 1.75],
  S2: [2, 3.5],
  S3: [4, 7],
  // Premium v2 Service Plan
  'P1 v2': [1, 3.5],
  'P2 v2': [2, 7],
  'P3 v2': [4, 14],
  // Premium v3 Service Plan
  'P1 v3': [2, 8],
  'P2 v3': [4, 16],
  'P3 v3': [8, 32],
  // Isolated Service Plan
  I1: [1, 3.5],
  I2: [2, 7],
  I3: [4, 14],
  // Isolated v2 Plan
  'I1 v2': [2, 8],
  'I2 v2': [4, 16],
  'I3 v2': [8, 32],
  // constrained vcpus capable
  'DS11-1 v2': [1, 14],
  'DS12-1 v2': [1, 28],
  'DS12-2 v2': [2, 28],
  'E4-2as v4': [2, 32],
  'E4-2ds v4': [2, 32],
  'E4-2s v3': [2, 32],
  'E4-2s v4': [2, 32],
  'DS13-2 v2': [2, 56],
  'E8-2as v4': [2, 64],
  'E8-2ds v4': [2, 64],
  'E8-2s v3': [2, 64],
  'E8-2s v4': [2, 64],
  'M8-2ms': [2, 219],
  'DS13-4 v2': [4, 56],
  'E8-4as v4': [4, 64],
  'E8-4ds v4': [4, 64],
  'E8-4s v3': [4, 64],
  'E8-4s v4': [4, 64],
  'DS14-4 v2': [4, 112],
  'E16-4as v4': [4, 128],
  'E16-4ds v4': [4, 128],
  'E16-4s v3': [4, 128],
  'E16-4s v4': [4, 128],
  'M8-4ms': [4, 219],
  'Gs4-4': [4, 224],
  'M16-4ms': [4, 438],
  'DS14-8 v2': [8, 112],
  'E16-8as v4': [8, 128],
  'E16-8ds v4': [8, 128],
  'E16-8s v3': [8, 128],
  'E16-8s v4': [8, 128],
  'Gs4-8': [8, 224],
  'E32-8as v4': [8, 256],
  'E32-8ds v4': [8, 256],
  'E32-8s v3': [8, 256],
  'E32-8s v4': [8, 256],
  'M16-8ms': [8, 438],
  'Gs5-8': [8, 448],
  'M32-8ms': [8, 875],
  'E32-16as v4': [16, 256],
  'E32-16ds v4': [16, 256],
  'E32-16s v3': [16, 256],
  'E32-16s v4': [16, 256],
  'E64-16s v3': [16, 432],
  'Gs5-16': [16, 448],
  'HB120-16rs v3': [16, 448],
  'E64-16ds v4': [16, 504],
  'E64-16s v4': [16, 504],
  'E64-16as v4': [16, 512],
  'M32-16ms': [16, 875],
  'M64-16ms': [16, 1750],
  'E96-24as v4': [24, 672],
  'E64-32s v3': [32, 432],
  'HB120-32rs v3': [32, 448],
  'E64-32ds v4': [32, 504],
  'E64-32s v4': [32, 504],
  'E64-32as v4': [32, 512],
  'M64-32ms': [32, 1750],
  'M128-32ms': [32, 3800],
  'E96-48as v4': [48, 672],
  'HB120-64rs v3': [64, 448],
  'M128-64ms': [64, 3800],
  'HB120-96rs v3': [96, 448],
}

export const INSTANCE_TYPE_COMPUTE_PROCESSOR_MAPPING: {
  [series: string]: string[]
} = {
  'A1 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A2 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A2m v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A4 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A4m v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A8 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'A8m v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B1ls: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B1s: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B1ms: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B2s: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B2ms: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B4ms: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B8ms: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B12ms: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B16ms: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  B20ms: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'D2a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D4a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D8a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D16a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D32a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D48a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D64a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D96a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D2as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D4as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D8as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D16as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D32as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D48as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D64as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D96as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'D2d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D4d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D8d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D16d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D32d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D48d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D64d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D2ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D4ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D8ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D16ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D32ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D48ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D64ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D2 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D4 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D8 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D16 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D32 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D48 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D64 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'D2s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D4s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D8s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D16s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D32s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D48s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D64s v4': cascadeLakeSkylakeBroadwellHaswell,
  'D2 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D4 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D8 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D16 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D32 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D48 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D64 v3': cascadeLakeSkylakeBroadwellHaswell,
  'D2s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D4s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D8s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D16s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D32s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D48s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D64s v3': cascadeLakeSkylakeBroadwellHaswell,
  'D1 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D2 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D3 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D4 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D5 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS1 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS2 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS3 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS4 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS5 v2': cascadeLakeSkylakeBroadwellHaswell,
  DC2s: [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  DC4s: [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC1s v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC2s v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC4s v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'DC8 v2': [COMPUTE_PROCESSOR_TYPES.COFFEE_LAKE],
  'F2s v2': cascadeLakeSkylake,
  'F4s v2': cascadeLakeSkylake,
  'F8s v2': cascadeLakeSkylake,
  'F16s v2': cascadeLakeSkylake,
  'F32s v2': cascadeLakeSkylake,
  'F48s v2': cascadeLakeSkylake,
  'F64s v2': cascadeLakeSkylake,
  'F72s v2': cascadeLakeSkylake,
  F1: cascadeLakeSkylakeBroadwellHaswell,
  F2: cascadeLakeSkylakeBroadwellHaswell,
  F4: cascadeLakeSkylakeBroadwellHaswell,
  F8: cascadeLakeSkylakeBroadwellHaswell,
  F16: cascadeLakeSkylakeBroadwellHaswell,
  F1s: cascadeLakeSkylakeBroadwellHaswell,
  F2s: cascadeLakeSkylakeBroadwellHaswell,
  F4s: cascadeLakeSkylakeBroadwellHaswell,
  F8s: cascadeLakeSkylakeBroadwellHaswell,
  F16s: cascadeLakeSkylakeBroadwellHaswell,
  'E2a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E4a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E8a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E16a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E20a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E32a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E48a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E64a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E96a v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E2as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E4as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E8as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E16as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E20as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E32as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E48as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E64as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E96as v4': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  'E2d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E20d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64d v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E20ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64ds v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E80ids v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64 v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E4s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E8s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E16s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E20s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E32s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E48s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E64s v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E80is v4': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'E2 v3': cascadeLakeSkylakeBroadwell,
  'E4 v3': cascadeLakeSkylakeBroadwell,
  'E8 v3': cascadeLakeSkylakeBroadwell,
  'E16 v3': cascadeLakeSkylakeBroadwell,
  'E20 v3': cascadeLakeSkylakeBroadwell,
  'E32 v3': cascadeLakeSkylakeBroadwell,
  'E48 v3': cascadeLakeSkylakeBroadwell,
  'E64i v3': cascadeLakeSkylakeBroadwell,
  'E64 v3': cascadeLakeSkylakeBroadwell,
  'E2s v3': cascadeLakeSkylakeBroadwell,
  'E4s v3': cascadeLakeSkylakeBroadwell,
  'E8s v3': cascadeLakeSkylakeBroadwell,
  'E16s v3': cascadeLakeSkylakeBroadwell,
  'E20s v3': cascadeLakeSkylakeBroadwell,
  'E32s v3': cascadeLakeSkylakeBroadwell,
  'E48s v3': cascadeLakeSkylakeBroadwell,
  'E64is v3': cascadeLakeSkylakeBroadwell,
  'E64s v3': cascadeLakeSkylakeBroadwell,
  'D11 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D12 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D13 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D14 v2': cascadeLakeSkylakeBroadwellHaswell,
  'D15i v2': cascadeLakeSkylakeBroadwellHaswell,
  'D15 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS11 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS12 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS13 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS14 v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS15i v2': cascadeLakeSkylakeBroadwellHaswell,
  'DS15 v2': cascadeLakeSkylakeBroadwellHaswell,
  G1: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G2: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G3: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G4: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  G5: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  Gs1: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs2: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs3: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs4: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  Gs5: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  M8ms: cascadeLakeHaswell,
  M16ms: cascadeLakeHaswell,
  M32ts: cascadeLakeHaswell,
  M32ls: cascadeLakeHaswell,
  M32ms: cascadeLakeHaswell,
  M64ls: cascadeLakeHaswell,
  M64s: cascadeLakeHaswell,
  M64: cascadeLakeHaswell,
  M64ms: cascadeLakeHaswell,
  M64m: cascadeLakeHaswell,
  M128s: cascadeLakeHaswell,
  M128: cascadeLakeHaswell,
  M128ms: cascadeLakeHaswell,
  M128m: cascadeLakeHaswell,
  'M32dms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64ds v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64dms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128ds v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128dms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192ids v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192idms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M32ms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64s v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M64ms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128s v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M128ms v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192is v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M192ims v2': [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  'M208s v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'M208ms v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'M416s v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'M416ms v2': [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  'DS11-1 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS12-1 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS12-2 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E4-2s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS13-2 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-2s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M8-2ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS13-4 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E8-4s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS14-4 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-4s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M8-4ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs4-4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M16-4ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'DS14-8 v2': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E16-8s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs4-8': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-8s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M16-8ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs5-8': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M32-8ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E32-16s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'Gs5-16': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-16as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M32-16ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M64-16ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E96-24as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32s v3': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32ds v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32s v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E64-32as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M64-32ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M128-32ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'E96-48as v4': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'M128-64ms': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'L8s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L16s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L32s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L48s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L64s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'L80s v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  L4s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  L8s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  L16s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  L32s: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  NC6: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  NC12: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  NC24r: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  NC24: [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC6 Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC12 Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC24 Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC24r Promo': [COMPUTE_PROCESSOR_TYPES.UNKNOWN],
  'NC6s v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC12s v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24rs v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24s v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC6s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC12s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24rs v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC24s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC4as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC8as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC16as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NC64as T4 v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  NP10s: [COMPUTE_PROCESSOR_TYPES.GPU],
  NP20s: [COMPUTE_PROCESSOR_TYPES.GPU],
  NP40s: [COMPUTE_PROCESSOR_TYPES.GPU],
  NV6: [COMPUTE_PROCESSOR_TYPES.GPU],
  NV12: [COMPUTE_PROCESSOR_TYPES.GPU],
  NV24: [COMPUTE_PROCESSOR_TYPES.GPU],
  'NV12s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NV24s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  'NV48s v3': [COMPUTE_PROCESSOR_TYPES.GPU],
  ND6s: [COMPUTE_PROCESSOR_TYPES.GPU],
  ND12s: [COMPUTE_PROCESSOR_TYPES.GPU],
  ND24rs: [COMPUTE_PROCESSOR_TYPES.GPU],
  ND24s: [COMPUTE_PROCESSOR_TYPES.GPU],
  'ND40rs v2': [COMPUTE_PROCESSOR_TYPES.GPU],
  'ND96asr A100 v4': [COMPUTE_PROCESSOR_TYPES.GPU],
  H8: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H8m: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16r: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16mr: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  H16m: [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H8 Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H8m Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16 Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16r Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16m Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  'H16mr Promo': [COMPUTE_PROCESSOR_TYPES.HASWELL],
  HB60rs: [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_1ST_GEN],
  'HB120rs v2': [COMPUTE_PROCESSOR_TYPES.AMD_EPYC_2ND_GEN],
  HC44rs: [COMPUTE_PROCESSOR_TYPES.SKYLAKE],
  S96: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S192: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S192m: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S192xm: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S384: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S384m: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S384xm: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S384xxm: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S576m: [COMPUTE_PROCESSOR_TYPES.BROADWELL],
  S224: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S224oo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S224m: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S224om: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S224ooo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S224oom: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S448: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S448oo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S448m: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S448om: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S448ooo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S448oom: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S672: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S672oo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S672m: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S672om: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S672ooo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S672oom: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S896: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S896oo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S896m: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S896om: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S896ooo: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
  S896oom: [COMPUTE_PROCESSOR_TYPES.CASCADE_LAKE],
}
