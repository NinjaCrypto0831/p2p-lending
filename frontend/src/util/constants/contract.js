const address = '0xe2fd7679d107f0b64f95ab93595dd56231498b71'
const ABI = [
    {
        constant: false,
        inputs: [
            {
                name: '_proposedFee',
                type: 'uint256'
            }
        ],
        name: 'createFeeProposal',
        outputs: [
            {
                name: 'proposalID',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {
                name: '_fnNumber',
                type: 'uint256'
            },
            {
                name: '_memberAddress',
                type: 'address'
            },
            {
                name: '_memberName',
                type: 'string'
            }
        ],
        name: 'createMembershipProposal',
        outputs: [
            {
                name: 'proposalID',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [],
        name: 'kill',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [],
        name: 'renounceOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {
                name: '_newOwner',
                type: 'address'
            }
        ],
        name: 'transferOwnership',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        constant: false,
        inputs: [
            {
                name: '_openProposalIndex',
                type: 'uint256'
            },
            {
                name: '_stance',
                type: 'bool'
            }
        ],
        name: 'vote',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                name: '_minQuorum',
                type: 'uint256'
            },
            {
                name: '_majorityMargin',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'proposalID',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'description',
                type: 'string'
            }
        ],
        name: 'ProposalAdded',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'proposalID',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'stance',
                type: 'bool'
            },
            {
                indexed: false,
                name: 'voter',
                type: 'address'
            }
        ],
        name: 'Voted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'proposalID',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'positiveVotes',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'numVotes',
                type: 'uint256'
            }
        ],
        name: 'ProposalExecuted',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'member',
                type: 'address'
            },
            {
                indexed: false,
                name: 'isMember',
                type: 'bool'
            }
        ],
        name: 'MembershipChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                name: 'oldFee',
                type: 'uint256'
            },
            {
                indexed: false,
                name: 'newFee',
                type: 'uint256'
            }
        ],
        name: 'ContractFeeChanged',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'previousOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipRenounced',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: 'previousOwner',
                type: 'address'
            },
            {
                indexed: true,
                name: 'newOwner',
                type: 'address'
            }
        ],
        name: 'OwnershipTransferred',
        type: 'event'
    },
    {
        constant: true,
        inputs: [],
        name: 'contractFee',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'getMembersLength',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'getOpenProposalsLength',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'getProposalsLength',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'majorityMargin',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {
                name: '',
                type: 'address'
            }
        ],
        name: 'memberID',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        name: 'members',
        outputs: [
            {
                name: 'member',
                type: 'address'
            },
            {
                name: 'name',
                type: 'string'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [],
        name: 'minQuorum',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        name: 'openProposals',
        outputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    },
    {
        constant: true,
        inputs: [
            {
                name: '',
                type: 'uint256'
            }
        ],
        name: 'proposals',
        outputs: [
            {
                name: 'author',
                type: 'address'
            },
            {
                name: 'fnNumber',
                type: 'uint256'
            },
            {
                name: 'numberOfVotes',
                type: 'uint256'
            },
            {
                name: 'positiveVotes',
                type: 'uint256'
            },
            {
                name: 'proposalPassed',
                type: 'bool'
            },
            {
                name: 'executed',
                type: 'bool'
            },
            {
                name: 'proposedFee',
                type: 'uint256'
            },
            {
                name: 'memberAddress',
                type: 'address'
            },
            {
                name: 'memberName',
                type: 'string'
            }
        ],
        payable: false,
        stateMutability: 'view',
        type: 'function'
    }
]
export { address, ABI }
