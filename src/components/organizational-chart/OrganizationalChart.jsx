import PropTypes from 'prop-types';
import { Tree, TreeNode } from 'react-organizational-chart';
import { useTheme } from '@mui/material/styles';
import flattenArray from '../../utils/flattenArray';
import { SimpleNode, StandardNode, GroupNode } from './node';
// ----------------------------------------------------------------------
OrganizationalChart.propTypes = {
  sx: PropTypes.object,
  variant: PropTypes.oneOf(['simple', 'standard', 'group']),
  data: PropTypes.shape({
    name: PropTypes.string,
    children: PropTypes.array,
  }),
};
export default function OrganizationalChart({ data, variant = 'simple', sx, ...other }) {
  const theme = useTheme();
  return (
    <Tree
      lineWidth="1.5px"
      nodePadding="4px"
      lineBorderRadius="24px"
      lineColor={theme.palette.divider}
      label={
        (variant === 'simple' && <SimpleNode sx={sx} node={data} />) ||
        (variant === 'standard' && (
          <StandardNode
            sx={sx}
            node={data}
            onEdit={() => console.log('EDIT', data.name)}
            onDelete={() => console.log('DELETE', data.name)}
          />
        )) ||
        (variant === 'group' && <GroupNode sx={sx} node={data} />)
      }
      {...other}
    >
      {data.children.map((list, idx) => (
        <List key={idx} depth={-1} data={list} variant={variant} sx={sx} />
      ))}
    </Tree>
  );
}
// ----------------------------------------------------------------------
List.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    children: PropTypes.array,
  }),
  sx: PropTypes.object,
  depth: PropTypes.number,
  variant: PropTypes.string,
};
export function List({ data, depth, variant, sx }) {
  const hasChild = data.children && !!data.children;
  const getDepth = (data) => {
    if (data?.name === 'Phòng KD Long Biên' || data?.name === 'Phòng KD Hà Đông') {
      return depth;
    }
    if (data?.name === 'quản lý') {
      return depth;
    }
    return depth + 1;
  };
  return (
    <TreeNode
      label={
        (variant === 'simple' && <SimpleNode sx={sx} node={data} />) ||
        (variant === 'standard' && (
          <StandardNode
            sx={sx}
            node={data}
            onEdit={() => console.log('EDIT', data.name)}
            onDelete={() => console.log('DELETE', data.name)}
          />
        )) ||
        (variant === 'group' && (
          <>
            <GroupNode
              sx={sx}
              node={data}
              depth={getDepth(data)}
              length={
                flattenArray(data.children, 'children')?.length > 0
                  ? flattenArray(data.children, 'children')?.length - (data?.name === 'Phòng kinh doanh' ? 2 : 0)
                  : 0
              }
            />
          </>
        ))
      }
    >
      {hasChild && <SubList data={data.children} depth={depth} variant={variant} sx={sx} />}
    </TreeNode>
  );
}
// ----------------------------------------------------------------------
SubList.propTypes = {
  sx: PropTypes.object,
  data: PropTypes.array,
  depth: PropTypes.number,
  variant: PropTypes.string,
};
function SubList({ data, depth, variant, sx }) {
  return (
    <>
      {data.map((list, idx) => (
        <List key={idx} data={list} depth={depth + 1} variant={variant} sx={sx} />
      ))}
    </>
  );
}
