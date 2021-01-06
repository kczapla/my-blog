import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { monoBlue as highlightstyle } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import math from 'remark-math'
import TeX from '@matejmazur/react-katex'
import 'katex/dist/katex.min.css'

const CodeRenderer = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={highlightstyle} language={language}>
      {value}
    </SyntaxHighlighter>
  )
}

CodeRenderer.propTypes = {
  language: PropTypes.string,
  value: PropTypes.string
}

const InlineMathRenderer = ({ value }) => <TeX math={value}/>

InlineMathRenderer.propTypes = {
  value: PropTypes.string
}

const BlockMathRenderer = ({ value }) => <TeX block math={value}/>

BlockMathRenderer.propTypes = {
  value: PropTypes.string
}

const PostContent = ({ post: { content } }) => {
  const renderers = { code: CodeRenderer, inlineMath: InlineMathRenderer, math: BlockMathRenderer }
  return <ReactMarkdown plugins={[math]} renderers={renderers}>{content}</ReactMarkdown>
}

PostContent.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string
  })
}

export default PostContent
