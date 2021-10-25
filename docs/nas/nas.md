# Part 1: Key Concepts in NAS

## Why we do NAS

## Key Concepts and Terminology

The objective of NAS is to find an network architecture $a$ from a predefined search space $\mathcal{A}$ that maximizes the predictive performance on unseen data $\phi(a)$. 

$$
a^\star = \mathop{\arg\max}_{a\sim \mathcal{A}} \, \,  \phi(a)
$$

For a network architecture $a$ and its weights $w$, let's denote its training loss by $\mathcal{L}_{train}(a,w)$ and its predictive performance (e.g., classification accuracy) on validation dataset by $\mathcal{P}_{val}(a,w)$. Then $\phi(a)$ is usually defined by 

$$
\phi(a) = \mathcal{P}_{val} (a, W_a^\star) 
$$

where $W_a^\star$ is the weights learned to minimize the training loss 

$$
W_a^\star = \mathop{\arg\min}_W \, \, \mathcal{L}_{train}(a, W)
$$

Above equations introduce some key concepts of a NAS algorithm, they are the **search space**, the **evaluation strategy** and the **search strategy**. 
The search space $\mathcal{A}$ defines the set of all the possible architectures. The search strategy selects an architecture candidate ($a$) from the search space ($a\sim\mathcal{A}$), and pass it to the evaluation strategy. The performance evaluation result $\phi(a)$ is returned to search strategy for deciding the next action (e.g., generating the next samples). 

```mermaid
flowchart LR
space[Search Space A] --> controller[Search Strategy]
controller -->|sample a from A| eval[Evaluation Strategy]
eval -->|return score of a| controller
```

Above is the abstract illustration of NAS (especially early NAS works). In this figure, the three dimensions are orthogonal and separable. However, in some recent works, search strategy and evaluation strategy may be coupled, which will be covered in later sections.

### Evaluation Strategy
The ideal evaluation function is directly scoring each architecture candidate $a$ with $\phi(a)$, which requires a standard training from sketch and evaluation of the whole training and validation dataset respectively. The computation cost of $\phi(a)$ is unfortunately huge and it is not suitable in the scenario of NAS, where thousands of architectures needs to be evaluated. 

### Search Strategy
The search strategies are the optimization algorithms used to explore the huge search space and maximize the evaluation function. 

### Search Space
According to the empirical results, the design of search space, which represents the human knowledge about the tasks, has big influence on the end-to-end result of NAS. 