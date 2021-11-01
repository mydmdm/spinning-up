# Introduction to NAS

## Why we do NAS
*Placeholder for the advantage and motivation of adopting NAS in practical scenarios.*

## Key Concepts and Terminology

The objective of NAS is to find an network architecture $a$ from a predefined search space $\mathcal{A}$ that maximizes the predictive performance on unseen data $\phi(a)$.

$$\begin{equation}
a^\star = \mathop{\arg\max}_{a\sim \mathcal{A}} \, \,  \phi(a)
\end{equation}$$

For a network architecture $a$ and its weights $w$, let's denote its training loss by $\mathcal{L}_{train}(a,w)$ and its predictive performance (e.g., classification accuracy) on validation dataset by $\mathcal{P}_{val}(a,w)$. Then $\phi(a)$ is usually defined by

$$\begin{equation}
\phi(a) = \mathcal{P}_{val} (a, W_a^\star)
\label{eq:evaluation}
\end{equation}$$

where $W_a^\star$ is the weights learned to minimize the training loss

$$\begin{equation}
W_a^\star = \mathop{\arg\min}_W \, \, \mathcal{L}_{train}(a, W)
\end{equation}$$

In a [well written survey](https://arxiv.org/abs/1808.05377), the authors summarize three key concepts from the NAS process, which are  the ***Search Space***, the ***Search Strategy*** and the ***Performance Evaluation Strategy***. We will follow these concepts here.

### Search Space
The search space $\mathcal{A}$ defines the set of all the possible architectures.

!!! info "Architecture Sampling"
    The process of selecting a specific architecture $a$ from the search space is called *architecture sampling* and denoted by $a \sim \mathcal{A}$.

!!! tip "You should know"
    According to the empirical results, the design of search space, which represents the human knowledge about the tasks, has big influence on the end-to-end result of NAS. Thus the NAS designers may specialize the search space for the given task or deployment platform. 

### Search Strategy
The search strategies are the optimization algorithms used to explore the huge search space and maximize the evaluation function.

- Stochastic optimization methods
- Gradient based methods

### Evaluation Strategy
A performance estimation (aka., reward, or scores) of the sampled architecture $a$ from search space $\mathcal{A}$ is used to guide the strategy to find the best choice. 
The ideal evaluation function is directly using $\phi(a)$ defined as above, which requires a standard training from sketch and evaluation of the whole training and validation dataset respectively. However, due to the unfortunately huge computational cost, it is not suitable in the scenario of NAS, where tens of thousands of architectures needs to be evaluated. 

Knowing the real accuracy of a given architecture is a too strict and hard prerequisite to meet. In many cases, a rough approximate or even just a rough comparison between two architectures is sufficient to guide the search strategies. 
To reduce the evaluation cost, some low cost approximates (denoted by $\hat{\phi}(a)$) are widely used to replace the origin $\phi(a)$ in NAS algorithms. The commonly used approximations include insufficient training results, performance with shared weights on supernet, and a specialized ranking network to compare the capacity of architectures. 

!!! info "Ranking Quality"
    It's natural to raise the question of how to measure the quality of $\hat{\phi}(a)$. [Kendall's $\tau$ coefficient](https://en.wikipedia.org/wiki/Kendall_rank_correlation_coefficient), a measurement of rank correlation, is widely used to prove the effectiveness of $\hat{\phi}(a)$ in many recent literatures. 

!!! attention "You should know"
    The nature of NAS is to identify the ***top ranked*** samples from the space. Though frequently used, Kendall's $\tau$ coefficient cares the ranking quality among the whole space, not only the top part. This implies that algorithms taking it as optimization object may waste some capacity on the unimportant part of space. 

### Weights Sharing

## Kinds of NAS algorithms

### Multi-Trial NAS algorithms

As illustrated in below diagram, the early NAS algorithms work in a multi-trial way, which depends on the search strategy (controller) to explore the huge space. 

```mermaid
flowchart LR
space[Search Space A] --> controller["Search Strategy (controller)"]
controller -->|sample a from A| eval[Evaluation Strategy]
eval -->|return score of a| controller
```
*Notes: all the diagrams will be refined in a formal version.*

Since the cost of the complete NAS process can be approximated as the product of number of architectures evaluated and the cost of each single evaluation (the computation of controller itself is typically ignorable), such algorithms focus on improving the efficiency of search strategy.

- Random Search (RS)
- Bayesian Optimization (BO) 
- Evolutionary methods
- Reinforcement Learning (RL) 

In the multi-trial algorithms, *lower fidelity estimates* are widely used to speedup the searching process. 


### Ranking based NAS algorithms

### One-Shot NAS algorithms


### Gradient based algorithms

