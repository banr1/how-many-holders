select
    -- date(bl.block_timestamp) as date,
    erc.contract_address as contract,
    count(erc.wallet_address) as n_holders
from
    ethereum.erc20_balances_historical erc
    left join ethereum.blocks bl on erc.block_number = bl.block_number
where
    date(bl.block_timestamp) = '{{date}}'
group by
    1
order by
    n_holders desc
limit
    100;
